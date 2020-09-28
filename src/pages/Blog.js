import Layout from '../components/Layout';
import styles from '../components/blog.module.css';
import React from 'react';

const Blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our Blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse architecto fuga
          consequuntur nulla commodi tempora optio rem accusamus et corporis fugit rerum hic,
          assumenda molestias nostrum error ipsum explicabo placeat. Deserunt facere quod
          praesentium asperiores. Nobis ipsum voluptate animi incidunt cupiditate ad illum aliquam
          reiciendis est sunt perferendis, quam esse. Enim quis aspernatur molestiae veniam minus
          doloremque quaerat nostrum illo rem alias, asperiores voluptatum possimus cumque aut
          maxime obcaecati eius, ducimus eveniet dignissimos quidem?
        </p>
      </div>
    </Layout>
  );
};

export default Blog;
