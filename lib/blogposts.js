import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'docs/blogposts');

export function getSortedPostsData() {
  // get file names
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove '.md' from filenames to get id
    const id = fileName.replace(/\.md$/, '');

    // read md files as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // use gray matter to parse the metadata section
    const matterResult = matter(fileContents);

    // conbine the data with id
    return {
      id,
      ...matterResult.data
    };
  });

  // sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'blog1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'blog2'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // use gray-matter to parse the metadata
  const matterResult = matter(fileContents);

  // using remark to convert md to html string
  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(remarkPrism)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data
  };
}
