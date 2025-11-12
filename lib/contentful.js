import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllContent() {
  try {
    const [
      techResponse,
      expResponse,
      educationResponse,
      footerLinksResponse,
      aboutResponse,
    ] = await Promise.all([
      client.getEntries({
        content_type: 'technologies',
        order: 'sys.createdAt',
      }),
      client.getEntries({ content_type: 'experience', order: 'sys.createdAt' }),
      client.getEntries({ content_type: 'education', order: 'sys.createdAt' }),
      client.getEntries({
        content_type: 'footerLinks',
        order: 'sys.createdAt',
      }),
      client.getEntries({ content_type: 'about' }),
    ]);

    let aboutContent = '';
    if (aboutResponse.items.length) {
      aboutContent = documentToHtmlString(
        aboutResponse.items[0].fields.content
      );
    }

    return {
      technologies: techResponse.items.map((item) => ({
        id: item.sys.id,
        ...item.fields,
      })),
      experience: expResponse.items.map((item) => ({
        id: item.sys.id,
        ...item.fields,
      })),
      education: educationResponse.items.map((item) => ({
        id: item.sys.id,
        ...item.fields,
      })),
      footerLinks: footerLinksResponse.items.map((item) => ({
        id: item.sys.id,
        ...item.fields,
      })),
      about: aboutContent,

      hero: aboutResponse.items.length
        ? {
            id: aboutResponse.items[0].sys.id,
            ...aboutResponse.items[0].fields,
          }
        : null,
    };
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    throw error;
  }
}

export async function getEntriesByType(contentType) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });

    return entries.items.map((entry) => ({
      id: entry.sys.id,
      ...entry.fields,
    }));
  } catch (error) {
    console.error(`Error fetching ${contentType} from Contentful:`, error);
    throw error;
  }
}
