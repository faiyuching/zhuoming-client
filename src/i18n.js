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
                group: "Group",
                timeline: "Timeline",
                resources: "Resources",
                discussion: "Discussion",
                settings: "Settings",
                history: "History Responses",
                more: "More",
                tasks: "Tasks",
                unFinished: "UnFinished",
                finished: "Finished",
                edit: "Edit",
                delete: "Delete",
                response_name: "Response Name:",
                organizer: "Organizer:",
                disaster_type: "Disaster Type:",
                disaster_level: "Disaster Level:",
                begin_time: "Begin Time:",
                needs_time: "Needs Time:",
                end_time: "End Time:",
                need_people: "People Needed:",
                statement: "statement:"
            },
            library: {
                library: "Library",
                sort: "Sort",
                geological: "Geological Disasters",
                hydrological: "Hydrological Disasters",
                meteorological: "Meteorological Disasters",
                wildfires: "Wildfires",
                epidemic: "Epidemic",
                others: "Other Disasters",
                history: "History",
                more: "More",
                recent: "Recent",
                topics: "Topics",
                videos: "Videos",
                audio: "Audio",
                articles: "Articles",
                books: "Books",
                disaster: "Disaster"
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
                tasks: "My Tasks",
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
                about: "基本信息",
                group: "组别",
                timeline: "时间线",
                resources: "资源",
                discussion: "讨论",
                settings: "设置",
                history: "历史响应",
                more: "更多",
                tasks: "任务",
                unFinished: "未完成",
                finished: "已完成",
                edit: "编辑",
                delete: "删除",
                response_name: "响应名称：",
                organizer: "发起人：",
                disaster_type: "灾害类型：",
                disaster_level: "灾害级别：",
                begin_time: "开始时间：",
                needs_time: "持续时间：",
                end_time: "结束时间：",
                need_people: "需要人数：",
                statement: "发起声明："
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
                books: "书籍",
                disaster: "灾害"
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
                profile: "资料",
                tasks: "任务",
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
