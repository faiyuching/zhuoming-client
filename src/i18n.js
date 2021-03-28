import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      response: {
        response: "Response",
        disaster: "Disaster",
        about: "About",
        base_info: "Base Information",
        groups: "Groups",
        jobs: "Jobs",
        members: "Members",
        timeline: "Timeline",
        resources: "Resources",
        discussion: "Discussion",
        settings: "Settings",
        history: "History Responses",
        more: "More",
        tasks: "Tasks",
        unfinished: "Unfinished",
        finished: "Finished",
        add_group: "Add Group",
        edit: "Edit",
        delete: "Delete",
        response_name: "Response Name",
        organizer: "Organizer:",
        disaster_type: "Disaster Type",
        disaster_level: "Disaster Level",
        begin_time: "Begin Time",
        needs_time: "Needs Time",
        end_time: "End Time",
        need_people: "People Needed",
        statement: "statement",
        all_groups: "All Groups",
        all_jobs: "All Jobs",
        cancel: "Cancel",
        confirm: "confirm",
        filter: "Filter",
        clear: "Clear",
      },
      library: {
        library: "Library",
        sort: "Sort",
        all_disaster_types: "All Disasters",
        all_resource_types: "All Types",
        meteoro_hydro: "Meteoro&Hydro",
        geological: "Geological",
        marine: "Marine",
        biological: "Biological",
        ecological: "Ecological",
        others: "Others",
        history: "History",
        more: "More",
        recent: "Recent",
        topic: "Topics",
        video: "Videos",
        audio: "Audio",
        article: "Articles",
        picture: "Picture",
        book: "Books",
        disaster: "Disaster",
        brief_report: "Brief Report",
        doc: "Doc",
        pdf: "PDF",
        excel: "Excel",
        ppt: "PPT",
        cancel: "Cancel",
        confirm: "confirm",
        filter: "Filter",
        clear: "Clear",
        search: "Search"
      },
      notice: {
        notice: "Notifications",
        unread: "Unread",
        archive: "Archive",
        system: "System Notification",
        task: "Task Notification",
        group: "Group Notice"
      },
      forum: {
        forum: "Forum",
        question: "Q&A",
        disaster: "Disaster",
        zhuoming: "Zhuoming",
        charity: "Charity",
        development: "Development",
        response: "Response",
        opinion: "Opinion",
        moments: "Moments"
      },
      user: {
        user: "Me",
        profile: "Profile",
        moments: "Moments",
        follow: "Follow",
        bookmarks: "Bookmarks",
        settings: "Settings",
        tasks: "My Tasks",
        unfinished: "In progress",
        finished: "Finished",
        language: "Language",
        followers: "Followers",
        following: "Following",
        back: "Back"
      }
    }
  },
  zh: {
    translation: {
      response: {
        response: "响应",
        disaster: "灾害",
        about: "关于",
        base_info: "基本信息",
        groups: "分组",
        jobs: "岗位",
        members: "成员",
        timeline: "时间线",
        resources: "资源",
        discussion: "讨论",
        settings: "设置",
        history: "历史响应",
        more: "更多",
        tasks: "任务",
        unfinished: "未完成",
        finished: "已完成",
        add_group: "添加成员",
        edit: "编辑",
        delete: "删除",
        response_name: "响应名称",
        organizer: "发起人",
        disaster_type: "灾害类型",
        disaster_level: "灾害级别",
        begin_time: "开始时间",
        needs_time: "持续时间",
        end_time: "结束时间",
        need_people: "需要人数",
        statement: "发起声明",
        all_groups: "所有分组",
        all_jobs: "所有岗位",
        cancel: "取消",
        confirm: "确定",
        filter: "筛选",
        clear: "清空",
      },
      library: {
        library: "资料库",
        sort: "分类",
        all_disaster_types: "所有灾害类型",
        all_resource_types: "所有资源类型",
        disaster: "灾害",
        meteoro_hydro: "气象水文灾害",
        geological: "地质地震灾害",
        marine: "海洋灾害",
        biological: "生物灾害",
        ecological: "生态环境灾害",
        others: "其他灾害",
        history: "历史阅读",
        more: "更多",
        recent: "最新推荐",
        topic: "专题",
        video: "视频",
        audio: "音频",
        article: "文章",
        book: "书籍",
        picture: "图片",
        brief_report: "简报",
        doc: "Doc",
        pdf: "PDF",
        excel: "Excel",
        ppt: "PPT",
        cancel: "取消",
        confirm: "确定",
        filter: "筛选",
        clear: "清空",
        search: "搜索"
      },
      notice: {
        notice: "通知",
        unread: "未读",
        archive: "已读",
        system: "系统通知",
        task: "任务通知",
        group: "小组通知"
      },
      forum: {
        forum: "论坛",
        question: "提问",
        disaster: "灾害",
        zhuoming: "卓明",
        charity: "公益",
        development: "开发",
        response: "响应",
        opinion: "观点/意见",
        moments: "此刻"
      },
      user: {
        user: "我的",
        profile: "资料",
        tasks: "任务",
        moments: "帖子",
        follow: "关注",
        bookmarks: "收藏",
        settings: "设置",
        unfinished: "正在进行中的任务",
        finished: "已完成的任务",
        language: "语言",
        followers: "关注者",
        following: "正在关注",
        back: "返回"
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
