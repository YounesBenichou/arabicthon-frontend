import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth} from "@/layouts";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "home": "Home",
        }
      },
      ar: {
        translation: {
          "home": "الرئيسية",
          "workers": "عمليات الإثراء",
          "worker": "تفاصيل عملية الإثراء",
          "sources": "المصادر",
          "Running" : "قيد التشغيل",
          "Pending" : "قيد الانتظار",
          "Completed" : "مكتمل",
          "Failed" : "معطل",
          "Canceled" : "ملغى",
          "pending": "قيد المراجعة",
          "accepted": "مقبول",
          "rejected": "مرفوض",
          "url": "رابط",
          "file": "ملف",
          "wikipedia": "ويكيبيديا",
          "definition": "تعريف",
        }
      }
    },
    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "ar",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/dashboard/*" element={<Dashboard />} /> 
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}
export default App;
