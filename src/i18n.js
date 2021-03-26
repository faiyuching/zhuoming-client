import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            label: {},
            error: {},
            message: {},
            text: { hello: "hello" },
            content: {},
            tabs: {
                Response: "Response",
                Library: "Library",
                Notice: "Notice",
                Forum: "Forum",
                User: "Me",
                Settings: "Settings"
            }
        }
    },
    zh: {
        translation: {
            label: {},
            error: {},
            message: {},
            text: { hello: "স্বাগতম" },
            content: {},
            tabs: {
                Response: "响应",
                Library: "知识库",
                Notice: "通知",
                Forum: "论坛",
                User: "我的",
                Settings: "设置"
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
