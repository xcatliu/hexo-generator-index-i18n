/* global hexo */
const pagination = require('hexo-pagination');

/**
 * Generates translated and paginated index pages.
 *
 * @param {string} baseUrl Base URL
 * @param {string} lang Language code to get the list of translated posts
 * @param {Object[]} posts Full list of posts
 * @param {Object} config Hexo config
 * @returns {Object[]} Array of translated and paginated index pages
 */
function getIndexPages(baseUrl, lang, posts, config) {
  const paginationDir = config.pagination_dir || 'page';
  const translatedPosts = posts.filter(post => post.lang === lang);

  return pagination(baseUrl, translatedPosts, {
    perPage: config.index_generator.per_page,
    layout: ['index'],
    format: `${paginationDir}/%d/`,
    data: {
      __index: true,
    },
  });
}

hexo.config.index_generator = Object.assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
  order_by: '-date',
}, hexo.config.index_generator);

hexo.extend.generator.register('index-i18n', function indexI18nGenerator(locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by);
  const languages = [].concat(config.language || []);
  const indexPages = [].concat.apply([],
    languages
      .filter(lang => lang !== 'default')
      .map(lang => getIndexPages(lang, lang, posts, config))
  );

  return indexPages;
});
