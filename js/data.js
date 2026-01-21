const boards = [
  {id:"arrivals", name:"Я здесь впервые", desc:"первые провалы"},
  {id:"routes", name:"Пути и уровни", desc:"маршруты без возврата"},
  {id:"signals", name:"Сигналы", desc:"отклики из глубины"},
  {id:"lost", name:"Пропавшие", desc:"последние следы"},
  {id:"warnings", name:"Предупреждения", desc:"прочитай, если успеешь"},
  {id:"off", name:"Off-topic", desc:"здесь не должно быть сообщений"}
];

const users = {
  alice:{status:"не зафиксирован", bio:"последний ответ получен слишком поздно"},
  system:{status:"архив", bio:"автоматическая запись"},
  unknown:{status:"?", bio:"данные повреждены"},
};

const threads = {};
boards.forEach(b=>{
  threads[b.id] = [];
  for(let i=0;i<40;i++){
    threads[b.id].push({
      user: Math.random()<.1 ? "system" : "unknown",
      time: ["??:??","ночью","архив"][Math.floor(Math.random()*3)],
      text: [
        "я видел это раньше",
        "почему меня возвращает сюда",
        "не обновляй страницу",
        "ALICE была здесь",
        "ты здесь не один"
      ][Math.floor(Math.random()*5)]
    });
  }
});
