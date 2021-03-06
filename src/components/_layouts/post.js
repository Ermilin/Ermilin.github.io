import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '@layouts/default';
import useMarkdown from '@hooks/useMarkdown';
import styles from '@styles/Post.module.scss';

const PostLayout = (props) => {
  const html = useMarkdown(props.content);

  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>

      <article className={styles.post}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </DefaultLayout>
  );
};

export default PostLayout;
