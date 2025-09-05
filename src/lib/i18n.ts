// 国际化配置和翻译函数

export const languages = {
    'zh-cn': '简体中文',
    en: 'English'
}

export const defaultLang = 'zh-cn'

export const translations = {
    'zh-cn': {
        'site.title': '个人博客 - 分享技术见解与生活思考',
        'site.description': '一个专注于技术分享和生活思考的个人博客，记录成长路上的点点滴滴',
        'nav.home': '首页',
        'nav.blog': '博客',
        'nav.about': '关于',
        'nav.movies': '电影',
        'nav.friends': '友链',
        'nav.language': '语言',
        'nav.switchTo': '切换到',
        'timeline.title': '文章时间轴',
        'timeline.subtitle': '按时间顺序记录的思考与分享',
        'timeline.readMore': '阅读全文',
        'author.name': 'logyxiao',
        'author.description': '一个热爱编程与设计的全栈开发者',
        'author.learnMore': '了解更多',
        'stats.title': '博客统计',
        'stats.totalPosts': '文章总数',
        'stats.joinedDate': '开始时间',
        'stats.location': '位置',
        'stats.locationValue': '中国',
        'navigation.title': '快速导航',
        'navigation.allPosts': '所有文章',
        'navigation.aboutMe': '关于我',
        'tags.title': '热门标签',
        'date.format': 'YYYY年M月D日'
    },
    en: {
        'site.title': 'Personal Blog - Sharing Tech Insights & Life Thoughts',
        'site.description': 'A personal blog focused on tech sharing and life reflections, documenting every step of growth',
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
        'author.description': 'A full-stack developer passionate about programming and design',
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
        'date.format': 'MMM D, YYYY'
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
