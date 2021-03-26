import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            response: {
                response: "Response",
                about: "About",
                groups: "Groups",
                timeline: "Timeline",
                resources: "Resources",
                discussion: "Discussion",
                settings: "Settings",
                history: "History Responses",
                more: "More",
                tasks: "Tasks",
                unFinished: "UnFinished",
                finished: "Finished"
            },
            library: {
                library: "Library",
                sort: "Sort",
                geological: "geological",
                hydrological: "hydrological",
                meteorological: "meteorological",
                wildfires: "wildfires",
                epidemic: "epidemic",
                others: "others",
                history: "History",
                more: "More",
                recent: "Recent",
                topics: "Topics",
                videos: "Videos",
                audio: "Audio",
                articles: "Articles",
                books: "Books"
            },
            notice: {
                notice: "Notice",
                unRead: "UnRead",
                read: "Read"
            },
            forum: {
                forum: "Forum"
            },
            user: {
                user: "Me",
                profile: "Profile",
                moments: "Moments",
                follow: "Follow",
                bookmarks: "Bookmarks",
                settings: "Settings",
                tasks: "Tasks",
                unFinished: "UnFinished",
                finished: "Finished",
                language: "Language"
            }
        }
    },
    zh: {
        translation: {
            response: {
                response: "响应",
                about: "关于",
                groups: "组别",
                timeline: "时间线",
                resources: "资源",
                discussion: "讨论",
                settings: "设置",
                history: "历史响应",
                more: "更多",
                tasks: "任务",
                unFinished: "未完成",
                finished: "已完成"
            },
            library: {
                library: "知识库",
                sort: "分类",
                geological: "地质灾害",
                hydrological: "水文灾害",
                meteorological: "气象灾害",
                wildfires: "野火",
                epidemic: "大流行",
                others: "其他",
                history: "历史阅读",
                more: "更多",
                recent: "最新推荐",
                topics: "专题",
                videos: "视频",
                audio: "音频",
                articles: "文章",
                books: "书籍"
            },
            notice: {
                notice: "通知",
                unRead: "未读",
                read: "已读"
            },
            forum: {
                forum: "论坛"
            },
            user: {
                user: "我的",
                profile: "个人资料",
                tasks: "我的任务",
                moments: "帖子",
                follow: "关注",
                bookmarks: "收藏",
                settings: "设置",
                unFinished: "未完成",
                finished: "已完成",
                language: "语言"
            }
        }
    }
};

i18n.use(initReactI18next).init({
    resources,

    lng: "zh",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;
