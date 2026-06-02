export const newsPageText = {
  en: {
    hero: {
      title: 'COMPANY & INDUSTRY NEWS',
      sub: 'Stay updated with the latest news,\nindustry insights and company stories.',
    },
    list: {
      heading: 'LATEST ARTICLES',
      showing: (from: number, to: number, total: number) =>
        `Showing ${from} – ${to} of ${total} results`,
      searchPlaceholder: 'Search articles...',
      by: 'By',
      readMore: 'READ MORE',
      noResults: 'No articles found.',
      comingSoon: 'Coming Soon — Stay Tuned',
      prev: 'Previous',
      next: 'Next',
    },
  },
  cn: {
    hero: {
      title: '公司与行业资讯',
      sub: '了解最新资讯、\n行业动态和公司故事。',
    },
    list: {
      heading: '最新文章',
      showing: (from: number, to: number, total: number) =>
        `显示第 ${from} – ${to} 条，共 ${total} 条`,
      searchPlaceholder: '搜索文章…',
      by: '作者',
      readMore: '阅读更多',
      noResults: '未找到相关文章。',
      comingSoon: '即将发布，敬请关注',
      prev: '上一页',
      next: '下一页',
    },
  },
}
