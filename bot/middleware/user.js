const { getUser } = require("../../db/crud/users");
const { APP_URL } = require("../../utils/constants");

module.exports["📋 Q/A-FAQ"] = (context) => {
  context.replyWithPhoto(
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUU-PgkKEhRY%2Fframe0.jpg&tbnid=dbkVfPptJUG-6M&vet=10CFEQMyiLAWoXChMIkPK63b_wgQMVAAAAAB0AAAAAEAM..i&imgrefurl=https%3A%2F%2Fwww.youtube.com%2F%40Alitechacademy&docid=xIqX4UQUx4LR_M&w=270&h=480&itg=1&q=alitech%20photo&ved=0CFEQMyiLAWoXChMIkPK63b_wgQMVAAAAAB0AAAAAEAM",
    {
      caption: `
<b>"Alicode IT Granti" bo'yicha eng dolzarb savollarga javob beramiz</b>
\n
<b>Grant kimlar uchun?</b>
👉 <b><a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a></b>
\n
<b>Grantni yutish uchun nima qilish kerak?</b>
👉 <b><a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a></b>
\n
<b>⏳Ro'yxatdan o'tish oxirgi sanasi:</b>
👉 <b><a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a></b>
\n
<b>Ro'yxatdan o'tish uchun nima qilish kerak?</b>
👉 <b><a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a></b>
\n
<b>Tanlov qaysi kunlarda bo'lib o'tadi?</b>
👉 <b><a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a></b>
\n
<b>Tanlov necha bosqichda bo'lib o'tadi?</b>
👉 <a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a>
\n
<b>Savollar qaysi fanlardan tuziladi?</b>
👉 <a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a>
\n
<b>Savollar darajasi qanday?</b>
👉 <a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a>
\n
<b>Imtihon uchun qancha vaqt ajratiladi?</b>
👉 <a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a>
\n
<b>Grant g'oliblariga qanday mukofotlar topshiriladi?</b>
👉 <a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a>
\n
<b>Taqdirlash marosimi qachon bo'lib o'tadi?</b>
👉 <a href='https://alitech.uz/ru/'>Batafsil ma'lumot</a>
\n
<b>📹 Video ma'lumot: Tez kunda ...</b>
\n
<b>✅ Qatnashing, bilimingizni sinovdan o'tkazing va maxsus mukofotlarga ega bo'ling.</b>
      `,
      parse_mode: "HTML",
    }
  );
};

module.exports["🥇 Rewards"] = (context) => {
  context.replyWithHTML(`
<b>👨‍🎓 G'oliblarni ajoyib sovg'alar va mukofotlar kutmoqda!</b>\n
🏆 Grant tanlovi g'oliblari <b>“Alicode IT Granti" g'oliblik guvohnomasi, maxsus Grant, shuningdek, esdalik sovg'alar va maxsus mukofotlar</b> bilan tantanali ravishda taqdirlanadi.\n
<b>▪️ Grant uchun kvota: </b>1000 ta
<b>▪️ Grantning umumiy qiymati: </b>2.8 milliard so'm\n
🏆 Tanlovda qatnashib, <b>sovrinli o'rinlarni</b> egallagan yoshlar quyidagicha rag'batlantiriladi:\n
<b>✅ Batafsil ma'lumot</b>: https://alitech.uz/ru/\n
<b>📹 Video ma'lumot: tez kunda ...</b>\n
📄 Tanlovda ishtirok etgan nomzodlarning <b>barchasiga</b> maxsus <b>QR-kodli</b> sertifikatlar onlayn topshiriladi. Sertifikatlar <a href='https://alitech.uz/ru/'>Alitech.uz</a> platformasida <b>“Shaxsiy kabinet”</b> orqali ishtirokchilarga yuboriladi.
  `);
};
module.exports["⚖️ Nizom"] = (context) => {
  context.replyWithHTML(`
📌 <b>TANLOV NIZOMI</b>
\n
Tanlov qanday nizomlar asosida shakllangan?
\n
✅ Tanlov uchun qat'iy belgilangan nizom va yo'riqnoma shakllantirilgan bo'lib, ushbu nizom tanlovdagi barcha jarayonlarni to'liq o'z ichiga olgan.
\n
✅ Nizom va yo'riqnomalar alitech.uz platformasiga joylangan bo'lib, istalgan vaqt undan foydalanishingiz mumkin
\n
✅ Tanlov nizomi: https://alitech.uz/ru/
\n
📹 Video ma'lumot: Tez kunda ...
  `);
};

module.exports["🏆 Alicode IT Grants"] = (context) => {
  context.replyWithHTML(`
<b>🎓 Alicode IT Granti - yoshlar uchun ajoyib tanlov!</b>\n
<b>Alicode IT Granti</b> - bu O'zbekiston ta'limi kelajagiga befarq bo'lmagan <a href='https://t.me/alicodeuz'>Alicode ta'lim loyihasi</a> va eng yirik platformalardan biri <a href='https://alitech.uz/ru/'>Alitech.uz</a> jamoasi tomonidan ishlab chiqilgan navbatdagi ijtimoiy loyiha bo'lib, bu orqali <b>eng iqtidorli yoshlarni bepul o'qitish va munosib mukofotlash</b> ko'zda tutilgan.\n
<b>Tanlovning asosiy maqsadi</b> - Respublika miqyosida tahsil olayotgan yoshlarning ta'lim olishini rag'batlantirish, iqtidorli yoshlarni qo'llab-quvvatlash, ularning ingliz tili savodxonlik darajasini oshirish hamda moliyaviy rag'batlantirish orqali <b>O'zbekiston ta'lim sohasini yanada rivojlantirishdan iborat.</b>\n
<b>▪️ Tashkilotchilar: <a href='https://t.me/alicodeuz'>Alitech Website Solutions</a>, <a href='https://alitech.uz/ru/'>Alitech.uz</a> jamoasi va <a href='https://t.me/eduuz_DTMuzb_Abituriyent_mandat'>Edu-ta'lim yangiliklari</a> telegram kanali</b>
 Grant uchun kvota: 1000 ta
<b>▪️ Grantning umumiy qiymati</b>: 2.8 milliard so'm\n
🏆 Grant tanlovi g'oliblari <b>“Alicode IT Granti“ g'oliblik guvohnomasi, maxsus Grant, shuningdek, esdalik sovg'alar va maxsus mukofotlar</b> bilan tantanali ravishda taqdirlanadi.\n
📑 Shuningdek, tanlovda ishtirok etgan nomzodlarning <b>barchasiga</b> maxsus <b>QR-kodli</b> sertifikatlar onlayn topshiriladi. Sertifikatlar <b><a href='https://alitech.uz/ru/'>Alitech.uz</a></b> platformasida <b>“Shaxsiy kabinet”</b> orqali ishtirokchilarga yuboriladi.\n
  `);
};

const sendReferalMessage = async (context) => {
  const user = await getUser(context.from.id);
  const usersReferalCount = 1;
  const userMustReferalMessageCount = usersReferalCount - user.referals;
  const message = `
Odamlarga jo'natilish yana kreak: ${userMustReferalMessageCount}.
Iltimos, 'https://t.me/my_first_NodeJS_bot?start=${user.telegram_id}' ni odamlarga jo'nating...
  `;
  context.replyWithHTML(message);
};

module.exports["📝 Start Test"] = async (context) => {
  const user = await getUser(context.from.id);
  !user.referals ? sendReferalMessage(context) : context.reply(APP_URL);
};
