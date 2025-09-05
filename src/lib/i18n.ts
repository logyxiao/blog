// 国际化配置和翻译函数

export const languages = {
    'zh-cn': '简体中文',
    en: 'English'
}

export const defaultLang = 'zh-cn'

export const translations = {
    'zh-cn': {
        'site.title': '个人博客 - 分享技术见解与生活思考',
        'site.description': '一个默默无闻的记录生活的人',
        'nav.home': '首页',
        'nav.blog': '博客',
        'nav.about': '关于',
        'nav.movies': '影视',
        'nav.friends': '友链',
        'nav.language': '语言',
        'nav.switchTo': '切换到',
        'timeline.title': '文章时间轴',
        'timeline.subtitle': '按时间顺序记录的思考与分享',
        'timeline.readMore': '阅读全文',
        'author.name': 'logyxiao',
        'author.description': '一个默默无闻的记录生活的人',
        'author.learnMore': '了解更多',
        'stats.title': '博客统计',
        'stats.totalPosts': '文章总数',
        'stats.joinedDate': '开始时间',
        'stats.location': '位置',
        'stats.locationValue': '杭州',
        'navigation.title': '快速导航',
        'navigation.allPosts': '所有文章',
        'navigation.aboutMe': '关于我',
        'tags.title': '热门标签',
        'date.format': 'YYYY年M月D日',
        'blog': '博客文章',
        'blogDescription': '探索技术世界，分享开发经验，记录学习成长的点点滴滴',
        'searchPlaceholder': '搜索文章标题或内容...',
        'all': '全部',
        'foundPosts': '找到 {count} 篇文章',
        'noResults': '没有找到匹配的文章',
        'clearFilters': '清除筛选条件',
        'about.title': '关于我',
        'about.subtitle': '一个热爱编程与设计的全栈开发者',
        'about.heroAlt': '个人头像',
        'about.intro.title': '个人简介',
        'about.intro.p1': '你好！我是一名充满热情的全栈开发者，专注于创建优雅且功能强大的Web应用程序。我喜欢探索新技术，解决复杂问题，并将创意想法转化为现实。',
        'about.intro.p2': '在过去的几年里，我积累了丰富的前端和后端开发经验，熟悉现代Web开发技术栈。我相信好的代码不仅要功能完善，更要简洁优雅，易于维护。',
        'about.intro.p3': '除了编程，我还热爱设计、摄影和阅读。我认为技术与艺术的结合能够创造出更有价值的产品。我期待与更多志同道合的朋友交流学习，共同成长。',
        'about.skills.title': '技能与兴趣',
        'about.skills.tech': '技术栈',
        'about.skills.interests': '兴趣爱好',
        'about.skills.interestsList': '摄影,阅读,设计,旅行,电影,音乐',
        'about.info.title': '基本信息',
        'about.info.location': '杭州',
        'about.info.job': '全栈开发工程师',
        'about.info.experience': '5年开发经验',
        'about.contact.title': '联系方式',
        'about.contact.email': 'logyxiao@gmail.com',
        'about.updates.title': '最新动态',
        'about.updates.item1': '完成了新博客系统的开发',
        'about.updates.item2': '学习了Astro框架的新特性',
        'about.updates.item3': '参加了技术分享会议',
        'movies.title': '我的影视收藏',
        'movies.subtitle': '记录那些触动心灵的光影时刻',
        'movies.searchPlaceholder': '搜索影视作品或类型...',
        'movies.categoryFilter': '类别筛选',
        'movies.stats': '收藏统计',
        'movies.totalCount': '总数量',
        'movies.avgRating': '平均评分',
        'movies.avgDoubanRating': '豆瓣平均分',
        'movies.categoryDistribution': '类别分布',
        'movies.quickFilter': '快速筛选',
        'movies.showAll': '显示全部',
        'movies.highRated': '高分作品 (8.0+)',
        'movies.recentWatched': '最新收藏',
        'movies.noMovies': '暂无影视作品',
        'movies.noResults': '没有找到匹配的影视作品'
    },
    en: {
        'site.title': 'Personal Blog - Sharing Tech Insights & Life Thoughts',
        'site.description': 'A person who quietly records life',
        'nav.home': 'Home',
        'nav.blog': 'Blog',
        'nav.about': 'About',
        'nav.movies': 'Movies',
        'nav.friends': 'Friends',
        'nav.language': 'Language',
        'nav.switchTo': 'Switch to',
        'timeline.title': 'Article Timeline',
        'timeline.subtitle': 'Thoughts and shares recorded in chronological order',
        'timeline.readMore': 'Read More',
        'author.name': 'logyxiao',
        'author.description': 'A person who quietly records life',
        'author.learnMore': 'Learn More',
        'stats.title': 'Blog Stats',
        'stats.totalPosts': 'Total Posts',
        'stats.joinedDate': 'Started',
        'stats.location': 'Location',
        'stats.locationValue': 'China',
        'navigation.title': 'Quick Navigation',
        'navigation.allPosts': 'All Posts',
        'navigation.aboutMe': 'About Me',
        'tags.title': 'Popular Tags',
        'date.format': 'MMM D, YYYY',
        'blog': 'Blog Posts',
        'blogDescription': 'Explore the tech world, share development experience, and record learning growth',
        'searchPlaceholder': 'Search articles title or content...',
        'all': 'All',
        'foundPosts': 'Found {count} posts',
        'noResults': 'No matching articles found',
        'clearFilters': 'Clear Filters',
        'about.title': 'About Me',
        'about.subtitle': 'A passionate full-stack developer who loves programming and design',
        'about.heroAlt': 'Profile picture',
        'about.intro.title': 'Introduction',
        'about.intro.p1': 'Hello! I am a passionate full-stack developer focused on creating elegant and powerful web applications. I love exploring new technologies, solving complex problems, and turning creative ideas into reality.',
        'about.intro.p2': 'Over the past few years, I have accumulated rich experience in frontend and backend development, familiar with modern web development technology stacks. I believe good code should not only be functional, but also clean, elegant, and maintainable.',
        'about.intro.p3': 'Besides programming, I also love design, photography, and reading. I believe the combination of technology and art can create more valuable products. I look forward to communicating and learning with more like-minded friends and growing together.',
        'about.skills.title': 'Skills & Interests',
        'about.skills.tech': 'Tech Stack',
        'about.skills.interests': 'Interests',
        'about.skills.interestsList': 'Photography,Reading,Design,Travel,Movies,Music',
        'about.info.title': 'Basic Info',
        'about.info.location': 'Shenzhen, China',
        'about.info.job': 'Full-stack Developer',
        'about.info.experience': '5 Years Experience',
        'about.contact.title': 'Contact',
        'about.contact.email': 'logyxiao@gmail.com',
        'about.updates.title': 'Recent Updates',
        'about.updates.item1': 'Completed new blog system development',
        'about.updates.item2': 'Learned new features of Astro framework',
        'about.updates.item3': 'Attended tech sharing conference',
        'movies.title': 'My Movie Collection',
        'movies.subtitle': 'Recording those moments that touch the soul',
        'movies.searchPlaceholder': 'Search movies or genres...',
        'movies.categoryFilter': 'Category Filter',
        'movies.stats': 'Collection Stats',
        'movies.totalCount': 'Total Count',
        'movies.avgRating': 'Average Rating',
        'movies.avgDoubanRating': 'Douban Average',
        'movies.categoryDistribution': 'Category Distribution',
        'movies.quickFilter': 'Quick Filter',
        'movies.showAll': 'Show All',
        'movies.highRated': 'High Rated (8.0+)',
        'movies.recentWatched': 'Recently Added',
        'movies.noMovies': 'No movies yet',
        'movies.noResults': 'No matching movies found'
    }
} as const

export function getLangFromUrl(url: URL) {
    // 从URL路径中提取语言代码 (例如: /en/about -> en)
    const [, lang] = url.pathname.split('/');
    if (lang && lang in languages) {
        return lang as keyof typeof languages;
    }
    return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
    return function t(key: keyof typeof translations[typeof defaultLang]) {
        return translations[lang][key] || translations[defaultLang][key]
    }
}

export function formatDate(date: Date, lang: keyof typeof languages) {
    if (lang === 'zh-cn') {
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function switchLanguage(newLang: keyof typeof languages, currentUrl: URL) {
    // 从当前URL路径中提取除语言外的路径部分
    const pathSegments = currentUrl.pathname.split('/').filter(Boolean);
    const currentLang = pathSegments[0];

    let remainingPath: string;

    // 如果第一个路径段是语言代码，提取剩余路径
    if (currentLang && currentLang in languages) {
        // 移除语言代码，获取剩余路径
        const remaining = pathSegments.slice(1);
        remainingPath = remaining.length > 0 ? '/' + remaining.join('/') : '';
    } else {
        // 如果没有语言前缀，整个路径都是剩余路径
        remainingPath = currentUrl.pathname === '/' ? '' : currentUrl.pathname;
    }

    // 构建新路径：语言前缀 + 剩余路径
    const newPath = `/${newLang}${remainingPath}`;

    return newPath;
}
