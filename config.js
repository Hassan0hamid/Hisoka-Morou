import { fileURLToPath } from "url"
import fs from "fs"

const limit = {
   free: 100, // زودت ليك الحد المجاني
   premium: "Infinity",
   VIP: "Infinity",
   download: {
      free: 50000000, // 50 ميجا
      premium: 1000000000, 
      VIP: 1130000000, 
   }
}

export default {
   limit,
   // ضفت ليك مكان لمفتاح Gemini هنا
   geminiKey: "AIzaSyClhwcczg1EWDXgybClgLgzBxCDquQFi5E", 
   
   APIs: {
      xzn: {
         URI: 'https://xzn.wtf',
         Key: "i dont know"
      }
   },

   msg: {
      owner: 'يا بشمهندس الأمر ده خاص بصاحب البوت بس! 🏗️',
      group: 'الأمر ده شغال في المجموعات بس!',
      private: 'تقدر تستخدم الأمر ده في الخاص بس!',
      admin: 'لازم تكون أدمن عشان تنفذ الطلب ده 📐',
      botAdmin: 'ارفعني أدمن الأول عشان أقدر أساعدك!',
      bot: 'خاصية حصرية لكارين فقط 👷‍♀️',
      locked: 'الميزة دي مقفولة حالياً!',
      media: 'أرسل لي الصورة أو الفيديو المطلوب..',
      error: "حصل مشكلة في السيستم، جرب تاني يا هندسة..",
      quoted: "اعمل رد (Reply) على الرسالة..",
      wait: "جاري التنفيذ.. استناني ثواني ⏳",
      premium: "الميزة دي للمهندسين المميزين (Premium) بس!",
   },

   options: {
      public: true, // خليه true عشان أي زول يقدر يستخدمه
      URI: "database.json",
      owner: ["966502336325"], // امسح الأرقام دي وحط رقمك بالكود الدولي (مثلاً 249 للسنودان)
      pathCommand: 'commands'
   },

   Exif: {
      packId: "Karen-Bot",
      packName: `ستيكر بواسطة:`,
      packPublish: "Karen", // ده الاسم الحيظهر في الاستيكر
      packEmail: "karen@civil.eng",
      packWebsite: "https://google.com",
      categories: ['🏗️', '📐', '👷‍♀️'],
      isAvatar: 0
   },

   session: {
      Path: "session",
      Name: "karen_session"
   }
}

function formatSize(bytes) {
   if (bytes >= 1000000024) { bytes = (bytes / 1000000024).toFixed(2) + " GB"; }
   else if (bytes >= 1000024) { bytes = (bytes / 1000024).toFixed(2) + " MB"; }
   else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
   else if (bytes > 1) { bytes = bytes + " bytes"; }
   else if (bytes == 1) { bytes = bytes + " byte"; }
   else { bytes = "0 bytes"; }
   return bytes;
}

let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})
