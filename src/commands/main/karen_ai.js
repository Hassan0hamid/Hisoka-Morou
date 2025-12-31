import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../../config.js";
export default {
   name: "ai",
   command: ["karen", "ai", "كارين"], // كارين هترد لو ناديتها بأساميها دي
   tags: ["main"],
   run: async (m, { conn, text }) => {
      if (!text) return m.reply("أيوة يا بشمهندس.. محتاج مساعدة في تصميم أو استشارة هندسية؟ 👷‍♀️");

      try {
         const genAI = new GoogleGenerativeAI(config.geminiKey);
         const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash",
            systemInstruction: "أنتِ 'كارين'، طالبة هندسة مدنية سودانية ذكية. تردين بلهجة سودانية مهذبة ومرحة. تحبين الهندسة وتستخدمين مصطلحات مثل (خرسانة، تسليح، كروكي) أحياناً بشكل فكاهي. أنتِ الآن تعملين كبوت واتساب لمساعدة الناس في التحميل والاستيكرات والدردشة."
         });

         const result = await model.generateContent(text);
         const response = await result.response;
         await m.reply(response.text());
      } catch (e) {
         console.error(e);
         m.reply("السيستم فيه مشكلة حالياً، غالباً ضغط شغل في الموقع! 🏗️");
      }
   },
   custom: true // عشان يشتغل كرد تلقائي لو حابب
}
