/* =========================
   BOARDS
========================= */
const boards = [
  { id: "arrivals", name: "Я здесь впервые" },
  { id: "routes", name: "Пути и уровни" },
  { id: "signals", name: "Сигналы" },
  { id: "lost", name: "Пропавшие" },
  { id: "warnings", name: "Предупреждения" },
  { id: "off", name: "Off-topic" }
];

/* =========================
   THREADS
========================= */
const threads = {

  arrivals: [
    { user:"unknown", time:"??:??", text:"я не помню момент, когда перешёл по ссылке" },
    { user:"unknown", time:"—", text:"адрес изменился после загрузки страницы" },
    { user:"wanderer_17", time:"ночью", text:"я просто искал старый форум, но оказался здесь" },
    { user:"unknown", time:"архив", text:"это точно не тот сайт, который я открывал" },
    { user:"unknown", time:"03:14", text:"кнопка назад не работает" },
    { user:"unknown", time:"—", text:"я закрыл вкладку и снова увидел этот форум" },
    { user:"unknown", time:"??:??", text:"я не вводил логин, но профиль уже был" },
    { user:"unknown", time:"ночью", text:"страница открылась сама" },
    { user:"unknown", time:"—", text:"почему здесь так тихо" },
    { user:"unknown", time:"архив", text:"форум выглядит давно заброшенным" }
  ],

  routes: [
    { user:"nullpath", time:"архив", text:"пути здесь не ведут туда, куда обещают" },
    { user:"unknown", time:"??:??", text:"адрес меняется после загрузки" },
    { user:"unknown", time:"—", text:"я пытался сохранить ссылку, но она стала другой" },
    { user:"unknown", time:"03:11", text:"маршрут совпал только с первого раза" },
    { user:"unknown", time:"ночью", text:"переход исчез после обновления" },
    { user:"nullpath", time:"архив", text:"если пройти по ссылке дважды, результат разный" },
    { user:"unknown", time:"—", text:"карта не совпадает с реальностью" },
    { user:"unknown", time:"??:??", text:"некоторые пути существуют только ночью" },
    { user:"unknown", time:"архив", text:"я не смог вернуться тем же маршрутом" },
    { user:"unknown", time:"—", text:"кнопка назад ведёт в другой раздел" }
  ],

  signals: [
    { user:"unknown", time:"ночью", text:"мне пришло уведомление, но без текста" },
    { user:"unknown", time:"—", text:"отправитель не указан" },
    { user:"unknown", time:"03:12", text:"я получил ответ, хотя ничего не писал" },
    { user:"unknown", time:"архив", text:"уведомление появилось после закрытия вкладки" },
    { user:"unknown", time:"—", text:"браузер был выключен" },
    { user:"unknown", time:"ночью", text:"экран мигнул и показал сообщение" },
    { user:"unknown", time:"—", text:"оно исчезло сразу" },
    { user:"unknown", time:"архив", text:"в журнале событий ничего нет" },
    { user:"unknown", time:"??:??", text:"но я уверен, что видел его" },
    { user:"unknown", time:"—", text:"оно было адресовано мне" }
  ],

  lost: [
    { user:"system", time:"архив", text:"user_12 — последнее появление зафиксировано" },
    { user:"unknown", time:"—", text:"кто-нибудь видел его после этого" },
    { user:"system", time:"архив", text:"ответов не поступало" },
    { user:"unknown", time:"ночью", text:"он писал здесь почти каждый день" },
    { user:"unknown", time:"—", text:"а потом просто исчез" },
    { user:"system", time:"архив", text:"аккаунт помечен как неактивный" },
    { user:"unknown", time:"—", text:"но профиль остался" },
    { user:"unknown", time:"03:14", text:"последнее сообщение было странным" },
    { user:"unknown", time:"—", text:"как будто он знал" },
    { user:"unknown", time:"—", text:"что это последнее" }
  ],

  warnings: [
    { user:"unknown", time:"—", text:"если ты здесь впервые, не читай всё подряд" },
    { user:"unknown", time:"—", text:"лучше закрой сайт сейчас" },
    { user:"unknown", time:"архив", text:"мы уже пытались предупредить новичков" },
    { user:"unknown", time:"—", text:"не задерживайся здесь надолго" },
    { user:"unknown", time:"—", text:"чем дольше читаешь, тем сложнее выйти" },
    { user:"unknown", time:"архив", text:"это не метафора" },
    { user:"unknown", time:"—", text:"мы проверяли" },
    { user:"unknown", time:"—", text:"результат всегда одинаковый" },
    { user:"unknown", time:"—", text:"кто-то остаётся" },
    { user:"unknown", time:"—", text:"и не возвращается" }
  ],

  off: [
    { user:"unknown", time:"—", text:"я здесь" },
    { user:"unknown", time:"—", text:"я здесь" },
    { user:"unknown", time:"—", text:"почему текст повторяется" },
    { user:"unknown", time:"—", text:"это уже было" },
    { user:"unknown", time:"—", text:"время не движется" },
    { user:"unknown", time:"—", text:"или движется неправильно" },
    { user:"unknown", time:"—", text:"я не писал это" },
    { user:"unknown", time:"—", text:"но это появилось" },
    { user:"unknown", time:"—", text:"не отвечай" },
    { user:"unknown", time:"—", text:"запись продолжается" }
  ]

};

/* =========================
   USERS
========================= */
const users = {
  unknown: {
    status: "неизвестно",
    bio: "профиль повреждён или не был создан полностью"
  },
  wanderer_17: {
    status: "оффлайн",
    bio: "один из первых, кто зашёл слишком глубоко"
  },
  nullpath: {
    status: "—",
    bio: "описывал маршруты, которые больше не существуют"
  },
  system: {
    status: "архив",
    bio: "автоматическая запись форума"
  }
};
