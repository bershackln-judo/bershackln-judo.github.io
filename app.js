/* ── Navigation ── */
const navBtns = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    screens.forEach(s => s.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));
    document.getElementById(btn.dataset.target).classList.add('active');
    btn.classList.add('active');
  });
});

/* ── Verb data ── */
const verbs = [
  {
    hu: 'van',
    ru: 'быть',
    transcription: '[вон]',
    examples: [
      { hu: 'Ez jó.', ru: 'Это хорошо.' },
      { hu: 'Ő tanár.', ru: 'Он/она учитель.' },
      { hu: 'Itthon van.', ru: 'Он/она дома.' },
    ]
  },
  {
    hu: 'kér',
    ru: 'просить, заказывать',
    transcription: '[кэр]',
    examples: [
      { hu: 'Kérek egy kávét.', ru: 'Мне, пожалуйста, кофе.' },
      { hu: 'Mit kérsz?', ru: 'Что ты хочешь?' },
      { hu: 'Kérem a számlát.', ru: 'Счёт, пожалуйста.' },
    ]
  },
  {
    hu: 'megy',
    ru: 'идти',
    transcription: '[медь]',
    examples: [
      { hu: 'Megyek haza.', ru: 'Я иду домой.' },
      { hu: 'Hova mész?', ru: 'Куда ты идёшь?' },
      { hu: 'Ő elmegy a boltba.', ru: 'Он идёт в магазин.' },
    ]
  },
  {
    hu: 'jön',
    ru: 'приходить',
    transcription: '[йён]',
    examples: [
      { hu: 'Jövök!', ru: 'Иду! (сейчас приду)' },
      { hu: 'Mikor jössz?', ru: 'Когда ты придёшь?' },
      { hu: 'Ő holnap jön.', ru: 'Он придёт завтра.' },
    ]
  },
  {
    hu: 'tud',
    ru: 'знать, мочь',
    transcription: '[туд]',
    examples: [
      { hu: 'Tudom.', ru: 'Я знаю.' },
      { hu: 'Tudsz magyarul?', ru: 'Ты знаешь венгерский?' },
      { hu: 'Nem tudok menni.', ru: 'Я не могу идти.' },
    ]
  },
  {
    hu: 'kell',
    ru: 'нужно, надо',
    transcription: '[кэлл]',
    examples: [
      { hu: 'Menni kell.', ru: 'Нужно идти.' },
      { hu: 'Kell egy perc.', ru: 'Нужна минута.' },
      { hu: 'Nem kell.', ru: 'Не нужно.' },
    ]
  },
  {
    hu: 'ad',
    ru: 'давать',
    transcription: '[од]',
    examples: [
      { hu: 'Add ide!', ru: 'Дай сюда!' },
      { hu: 'Adok neked valamit.', ru: 'Я дам тебе кое-что.' },
      { hu: 'Ő pénzt ad.', ru: 'Он даёт деньги.' },
    ]
  },
  {
    hu: 'vesz',
    ru: 'брать, покупать',
    transcription: '[вэс]',
    examples: [
      { hu: 'Veszek kenyeret.', ru: 'Я куплю хлеб.' },
      { hu: 'Mit veszel?', ru: 'Что ты берёшь?' },
      { hu: 'Vegyél tejet!', ru: 'Купи молока!' },
    ]
  },
  {
    hu: 'mond',
    ru: 'говорить, сказать',
    transcription: '[монд]',
    examples: [
      { hu: 'Mit mondasz?', ru: 'Что ты говоришь?' },
      { hu: 'Mondd meg!', ru: 'Скажи мне!' },
      { hu: 'Ő azt mondja, hogy…', ru: 'Он говорит, что…' },
    ]
  },
  {
    hu: 'lát',
    ru: 'видеть',
    transcription: '[лат]',
    examples: [
      { hu: 'Látom.', ru: 'Я вижу.' },
      { hu: 'Látod azt?', ru: 'Ты это видишь?' },
      { hu: 'Nem látok semmit.', ru: 'Я ничего не вижу.' },
    ]
  },
  {
    hu: 'fizet',
    ru: 'платить',
    transcription: '[физэт]',
    examples: [
      { hu: 'Fizetek.', ru: 'Я плачу.' },
      { hu: 'Ki fizet?', ru: 'Кто платит?' },
      { hu: 'Kártyával fizetek.', ru: 'Я плачу картой.' },
    ]
  },
  {
    hu: 'eszik',
    ru: 'есть (принимать пищу)',
    transcription: '[эсик]',
    examples: [
      { hu: 'Mit eszel?', ru: 'Что ты ешь?' },
      { hu: 'Eszem egy szendvicset.', ru: 'Я ем бутерброд.' },
      { hu: 'Ő sokat eszik.', ru: 'Он много ест.' },
    ]
  },
  {
    hu: 'iszik',
    ru: 'пить',
    transcription: '[ишик]',
    examples: [
      { hu: 'Mit iszol?', ru: 'Что ты пьёшь?' },
      { hu: 'Iszom egy pohár vizet.', ru: 'Я пью стакан воды.' },
      { hu: 'Ő kávét iszik.', ru: 'Он пьёт кофе.' },
    ]
  },
  {
    hu: 'segít',
    ru: 'помогать',
    transcription: '[шэгит]',
    examples: [
      { hu: 'Segítek!', ru: 'Я помогу!' },
      { hu: 'Tudsz segíteni?', ru: 'Ты можешь помочь?' },
      { hu: 'Ő mindig segít.', ru: 'Он всегда помогает.' },
    ]
  },
  {
    hu: 'ért',
    ru: 'понимать',
    transcription: '[эрт]',
    examples: [
      { hu: 'Értem.', ru: 'Я понимаю.' },
      { hu: 'Érted?', ru: 'Ты понимаешь?' },
      { hu: 'Nem értem.', ru: 'Я не понимаю.' },
    ]
  },
  {
    hu: 'akar',
    ru: 'хотеть',
    transcription: '[окор]',
    examples: [
      { hu: 'Mit akarsz?', ru: 'Что ты хочешь?' },
      { hu: 'Akarok menni.', ru: 'Я хочу идти.' },
      { hu: 'Ő nem akar várni.', ru: 'Он не хочет ждать.' },
    ]
  },
  {
    hu: 'csinál',
    ru: 'делать',
    transcription: '[чинал]',
    examples: [
      { hu: 'Mit csinálsz?', ru: 'Что ты делаешь?' },
      { hu: 'Csinálok valamit.', ru: 'Я делаю кое-что.' },
      { hu: 'Mit csináljak?', ru: 'Что мне делать?' },
    ]
  },
  {
    hu: 'hall',
    ru: 'слышать',
    transcription: '[холл]',
    examples: [
      { hu: 'Hallom.', ru: 'Я слышу.' },
      { hu: 'Hallod?', ru: 'Ты слышишь?' },
      { hu: 'Nem hallok semmit.', ru: 'Я ничего не слышу.' },
    ]
  },
  {
    hu: 'keres',
    ru: 'искать',
    transcription: '[кэрэш]',
    examples: [
      { hu: 'Mit keresel?', ru: 'Что ты ищешь?' },
      { hu: 'A kulcsomat keresem.', ru: 'Я ищу свои ключи.' },
      { hu: 'Ő munkát keres.', ru: 'Он ищет работу.' },
    ]
  },
  {
    hu: 'vár',
    ru: 'ждать',
    transcription: '[вар]',
    examples: [
      { hu: 'Várok rád.', ru: 'Я жду тебя.' },
      { hu: 'Várj!', ru: 'Подожди!' },
      { hu: 'Meddig vársz?', ru: 'Как долго ты ждёшь?' },
    ]
  },
  {
    hu: 'alszik',
    ru: 'спать',
    transcription: '[олсик]',
    examples: [
      { hu: 'Alszom.', ru: 'Я сплю.' },
      { hu: 'Jól aludtál?', ru: 'Ты хорошо поспал?' },
      { hu: 'A gyerek alszik.', ru: 'Ребёнок спит.' },
    ]
  },
  {
    hu: 'ül',
    ru: 'сидеть',
    transcription: '[юль]',
    examples: [
      { hu: 'Ülök a padon.', ru: 'Я сижу на скамейке.' },
      { hu: 'Ülj le!', ru: 'Садись!' },
      { hu: 'Hol ülsz?', ru: 'Где ты сидишь?' },
    ]
  },
  {
    hu: 'áll',
    ru: 'стоять',
    transcription: '[алл]',
    examples: [
      { hu: 'Állok a buszmegállóban.', ru: 'Я стою на автобусной остановке.' },
      { hu: 'Állj meg!', ru: 'Стой!' },
      { hu: 'Ő az ajtóban áll.', ru: 'Он стоит в дверях.' },
    ]
  },
  {
    hu: 'jár',
    ru: 'ходить',
    transcription: '[яр]',
    examples: [
      { hu: 'Gyalog járok.', ru: 'Я хожу пешком.' },
      { hu: 'Jársz edzésre?', ru: 'Ты ходишь на тренировки?' },
      { hu: 'Ő iskolába jár.', ru: 'Он ходит в школу.' },
    ]
  },
  {
    hu: 'utazik',
    ru: 'путешествовать',
    transcription: '[утозик]',
    examples: [
      { hu: 'Utazom Budapestre.', ru: 'Я еду в Будапешт.' },
      { hu: 'Hova utazol?', ru: 'Куда ты едешь?' },
      { hu: 'Ő sokat utazik.', ru: 'Он много путешествует.' },
    ]
  },
  {
    hu: 'dolgozik',
    ru: 'работать',
    transcription: '[долгозик]',
    examples: [
      { hu: 'Dolgozom.', ru: 'Я работаю.' },
      { hu: 'Hol dolgozol?', ru: 'Где ты работаешь?' },
      { hu: 'Ő otthon dolgozik.', ru: 'Он работает дома.' },
    ]
  },
  {
    hu: 'tanul',
    ru: 'учиться',
    transcription: '[тонул]',
    examples: [
      { hu: 'Magyarul tanulok.', ru: 'Я учу венгерский.' },
      { hu: 'Mit tanulsz?', ru: 'Что ты учишь?' },
      { hu: 'Ő sokat tanul.', ru: 'Он много учится.' },
    ]
  },
  {
    hu: 'olvas',
    ru: 'читать',
    transcription: '[олвош]',
    examples: [
      { hu: 'Könyvet olvasok.', ru: 'Я читаю книгу.' },
      { hu: 'Mit olvasol?', ru: 'Что ты читаешь?' },
      { hu: 'Ő minden nap olvas.', ru: 'Он читает каждый день.' },
    ]
  },
  {
    hu: 'ír',
    ru: 'писать',
    transcription: '[ир]',
    examples: [
      { hu: 'Levelet írok.', ru: 'Я пишу письмо.' },
      { hu: 'Írsz nekem?', ru: 'Ты напишешь мне?' },
      { hu: 'Ő szépen ír.', ru: 'Он красиво пишет.' },
    ]
  },
  {
    hu: 'néz',
    ru: 'смотреть',
    transcription: '[нэз]',
    examples: [
      { hu: 'Tévét nézek.', ru: 'Я смотрю телевизор.' },
      { hu: 'Mit nézel?', ru: 'Что ты смотришь?' },
      { hu: 'Nézd meg!', ru: 'Посмотри!' },
    ]
  },
  {
    hu: 'hallgat',
    ru: 'слушать',
    transcription: '[холлгот]',
    examples: [
      { hu: 'Zenét hallgatok.', ru: 'Я слушаю музыку.' },
      { hu: 'Mit hallgatsz?', ru: 'Что ты слушаешь?' },
      { hu: 'Hallgass rám!', ru: 'Слушай меня!' },
    ]
  },
  {
    hu: 'beszél',
    ru: 'разговаривать',
    transcription: '[бэсэл]',
    examples: [
      { hu: 'Magyarul beszélek.', ru: 'Я говорю по-венгерски.' },
      { hu: 'Tudsz angolul beszélni?', ru: 'Ты можешь говорить по-английски?' },
      { hu: 'Ő sokat beszél.', ru: 'Он много говорит.' },
    ]
  },
  {
    hu: 'nyit',
    ru: 'открывать',
    transcription: '[нит]',
    examples: [
      { hu: 'Nyisd ki az ajtót!', ru: 'Открой дверь!' },
      { hu: 'Nyitok egy ablakot.', ru: 'Я открою окно.' },
      { hu: 'Mikor nyit a bolt?', ru: 'Когда открывается магазин?' },
    ]
  },
  {
    hu: 'zár',
    ru: 'закрывать',
    transcription: '[зар]',
    examples: [
      { hu: 'Zárd be az ajtót!', ru: 'Закрой дверь!' },
      { hu: 'Zárom az ablakot.', ru: 'Я закрываю окно.' },
      { hu: 'Mikor zár a posta?', ru: 'Когда закрывается почта?' },
    ]
  },
  {
    hu: 'hoz',
    ru: 'приносить',
    transcription: '[хоз]',
    examples: [
      { hu: 'Hozok valamit.', ru: 'Я принесу кое-что.' },
      { hu: 'Mit hozol?', ru: 'Что ты принесёшь?' },
      { hu: 'Hozz vizet!', ru: 'Принеси воды!' },
    ]
  },
  {
    hu: 'visz',
    ru: 'уносить, нести',
    transcription: '[вис]',
    examples: [
      { hu: 'Viszem a táskát.', ru: 'Я несу сумку.' },
      { hu: 'Mit viszel?', ru: 'Что ты несёшь?' },
      { hu: 'Vidd el!', ru: 'Унеси это!' },
    ]
  },
  {
    hu: 'küld',
    ru: 'отправлять',
    transcription: '[кюльд]',
    examples: [
      { hu: 'Küldök egy üzenetet.', ru: 'Я отправлю сообщение.' },
      { hu: 'Küldsz képet?', ru: 'Ты пришлёшь фото?' },
      { hu: 'Küld el a levelet!', ru: 'Отправь письмо!' },
    ]
  },
  {
    hu: 'főz',
    ru: 'готовить (еду)',
    transcription: '[фёз]',
    examples: [
      { hu: 'Ebédet főzök.', ru: 'Я готовлю обед.' },
      { hu: 'Mit főzöl?', ru: 'Что ты готовишь?' },
      { hu: 'Ő nagyon jól főz.', ru: 'Он очень хорошо готовит.' },
    ]
  },
  {
    hu: 'vásárol',
    ru: 'покупать',
    transcription: '[вашарол]',
    examples: [
      { hu: 'A piacon vásárolok.', ru: 'Я покупаю на рынке.' },
      { hu: 'Hol vásárolsz?', ru: 'Где ты покупаешь?' },
      { hu: 'Ő sokat vásárol online.', ru: 'Он много покупает онлайн.' },
    ]
  },
  {
    hu: 'rendel',
    ru: 'заказывать',
    transcription: '[рэндэл]',
    examples: [
      { hu: 'Pizzát rendelek.', ru: 'Я заказываю пиццу.' },
      { hu: 'Mit rendelsz?', ru: 'Что ты заказываешь?' },
      { hu: 'Online rendelünk.', ru: 'Мы заказываем онлайн.' },
    ]
  },
  {
    hu: 'foglal',
    ru: 'бронировать',
    transcription: '[фоглол]',
    examples: [
      { hu: 'Szobát foglalok.', ru: 'Я бронирую номер.' },
      { hu: 'Foglaltál helyet?', ru: 'Ты забронировал место?' },
      { hu: 'Asztalt szeretnék foglalni.', ru: 'Я хотел бы забронировать столик.' },
    ]
  },
  {
    hu: 'hív',
    ru: 'звонить',
    transcription: '[хив]',
    examples: [
      { hu: 'Hívlak később.', ru: 'Я позвоню тебе позже.' },
      { hu: 'Ki hívott?', ru: 'Кто звонил?' },
      { hu: 'Hívj fel!', ru: 'Позвони мне!' },
    ]
  },
  {
    hu: 'találkozik',
    ru: 'встречаться',
    transcription: '[толалкозик]',
    examples: [
      { hu: 'Hat órakor találkozunk.', ru: 'Мы встречаемся в шесть.' },
      { hu: 'Hol találkozunk?', ru: 'Где мы встретимся?' },
      { hu: 'Találkoztam vele.', ru: 'Я встретился с ним.' },
    ]
  },
  {
    hu: 'indul',
    ru: 'отправляться',
    transcription: '[индул]',
    examples: [
      { hu: 'Indulok.', ru: 'Я отправляюсь.' },
      { hu: 'Mikor indulsz?', ru: 'Когда ты отправляешься?' },
      { hu: 'A vonat hamarosan indul.', ru: 'Поезд скоро отправляется.' },
    ]
  },
  {
    hu: 'érkezik',
    ru: 'прибывать',
    transcription: '[эркэзик]',
    examples: [
      { hu: 'Mikor érkezik a busz?', ru: 'Когда прибывает автобус?' },
      { hu: 'Már megérkeztem.', ru: 'Я уже прибыл.' },
      { hu: 'Ő holnap érkezik.', ru: 'Он прибывает завтра.' },
    ]
  },
  {
    hu: 'megáll',
    ru: 'останавливаться',
    transcription: '[мэгалл]',
    examples: [
      { hu: 'Megállok itt.', ru: 'Я останавливаюсь здесь.' },
      { hu: 'Álljon meg!', ru: 'Остановитесь!' },
      { hu: 'A busz megáll itt.', ru: 'Автобус останавливается здесь.' },
    ]
  },
  {
    hu: 'fordul',
    ru: 'поворачивать',
    transcription: '[фордул]',
    examples: [
      { hu: 'Fordulj jobbra!', ru: 'Поверни направо!' },
      { hu: 'Az utca végén fordulj balra.', ru: 'На конце улицы поверни налево.' },
      { hu: 'Fordulj meg!', ru: 'Повернись!' },
    ]
  },
  {
    hu: 'siet',
    ru: 'спешить',
    transcription: '[шиэт]',
    examples: [
      { hu: 'Sietek.', ru: 'Я спешу.' },
      { hu: 'Ne siess!', ru: 'Не спеши!' },
      { hu: 'Miért sietsz?', ru: 'Почему ты спешишь?' },
    ]
  },
  {
    hu: 'késik',
    ru: 'опаздывать',
    transcription: '[кэшик]',
    examples: [
      { hu: 'Késem.', ru: 'Я опаздываю.' },
      { hu: 'Miért késel?', ru: 'Почему ты опаздываешь?' },
      { hu: 'A vonat késik.', ru: 'Поезд опаздывает.' },
    ]
  },
  {
    hu: 'pihen',
    ru: 'отдыхать',
    transcription: '[пихэн]',
    examples: [
      { hu: 'Pihenek egy kicsit.', ru: 'Я отдохну немного.' },
      { hu: 'Pihenj!', ru: 'Отдохни!' },
      { hu: 'Hétvégén pihenünk.', ru: 'На выходных мы отдыхаем.' },
    ]
  },
  {
    hu: 'játszik',
    ru: 'играть',
    transcription: '[ятсик]',
    examples: [
      { hu: 'Mit játszol?', ru: 'Во что ты играешь?' },
      { hu: 'Focizom.', ru: 'Я играю в футбол.' },
      { hu: 'A gyerekek játszanak.', ru: 'Дети играют.' },
    ]
  },
  {
    hu: 'énekel',
    ru: 'петь',
    transcription: '[энэкэл]',
    examples: [
      { hu: 'Énekelek a zuhany alatt.', ru: 'Я пою в душе.' },
      { hu: 'Tudsz énekelni?', ru: 'Ты умеешь петь?' },
      { hu: 'Ő szépen énekel.', ru: 'Он красиво поёт.' },
    ]
  },
  {
    hu: 'táncol',
    ru: 'танцевать',
    transcription: '[танцол]',
    examples: [
      { hu: 'Szeretek táncolni.', ru: 'Я люблю танцевать.' },
      { hu: 'Táncolsz velem?', ru: 'Ты потанцуешь со мной?' },
      { hu: 'Ő jól táncol.', ru: 'Он хорошо танцует.' },
    ]
  },
  {
    hu: 'nevet',
    ru: 'смеяться',
    transcription: '[нэвэт]',
    examples: [
      { hu: 'Nevetek.', ru: 'Я смеюсь.' },
      { hu: 'Min nevetsz?', ru: 'Над чем ты смеёшься?' },
      { hu: 'Ne nevess!', ru: 'Не смейся!' },
    ]
  },
  {
    hu: 'fáj',
    ru: 'болеть',
    transcription: '[фай]',
    examples: [
      { hu: 'Fáj a fejem.', ru: 'У меня болит голова.' },
      { hu: 'Hol fáj?', ru: 'Где болит?' },
      { hu: 'Fáj a lábam.', ru: 'У меня болит нога.' },
    ]
  },
  {
    hu: 'érez',
    ru: 'чувствовать',
    transcription: '[эрэз]',
    examples: [
      { hu: 'Jól érzem magam.', ru: 'Я чувствую себя хорошо.' },
      { hu: 'Mit érzel?', ru: 'Что ты чувствуешь?' },
      { hu: 'Fáradtnak érzem magam.', ru: 'Я чувствую себя уставшим.' },
    ]
  },
  {
    hu: 'szeret',
    ru: 'любить',
    transcription: '[сэрэт]',
    examples: [
      { hu: 'Szeretlek.', ru: 'Я тебя люблю.' },
      { hu: 'Szeretem a kávét.', ru: 'Я люблю кофе.' },
      { hu: 'Ő szeret olvasni.', ru: 'Он любит читать.' },
    ]
  },
  {
    hu: 'fél',
    ru: 'бояться',
    transcription: '[фэл]',
    examples: [
      { hu: 'Félek.', ru: 'Я боюсь.' },
      { hu: 'Mitől félsz?', ru: 'Чего ты боишься?' },
      { hu: 'Ne félj!', ru: 'Не бойся!' },
    ]
  },
  {
    hu: 'örül',
    ru: 'радоваться',
    transcription: '[ёрюль]',
    examples: [
      { hu: 'Örülök!', ru: 'Я рад(а)!' },
      { hu: 'Minek örülsz?', ru: 'Чему ты радуешься?' },
      { hu: 'Örülök, hogy itt vagy.', ru: 'Я рад(а), что ты здесь.' },
    ]
  },
  {
    hu: 'gondol',
    ru: 'думать',
    transcription: '[гондол]',
    examples: [
      { hu: 'Mit gondolsz?', ru: 'Что ты думаешь?' },
      { hu: 'Gondolok rád.', ru: 'Я думаю о тебе.' },
      { hu: 'Gondolj bele!', ru: 'Подумай об этом!' },
    ]
  },
  {
    hu: 'emlékszik',
    ru: 'помнить',
    transcription: '[эмлэксик]',
    examples: [
      { hu: 'Emlékszem rád.', ru: 'Я помню тебя.' },
      { hu: 'Emlékszel erre?', ru: 'Ты помнишь это?' },
      { hu: 'Nem emlékszem.', ru: 'Я не помню.' },
    ]
  },
  {
    hu: 'felejt',
    ru: 'забывать',
    transcription: '[фэлэйт]',
    examples: [
      { hu: 'Ne felejtsd el!', ru: 'Не забудь!' },
      { hu: 'Elfelejtette.', ru: 'Он/она забыл(а).' },
      { hu: 'Mindent elfelejtek.', ru: 'Я всё забываю.' },
    ]
  },
  {
    hu: 'ismer',
    ru: 'знать (человека)',
    transcription: '[ишмэр]',
    examples: [
      { hu: 'Ismerem őt.', ru: 'Я знаю его/её.' },
      { hu: 'Ismersz valakit?', ru: 'Ты кого-нибудь знаешь?' },
      { hu: 'Nem ismerem.', ru: 'Я не знаю его/её.' },
    ]
  },
  {
    hu: 'magyaráz',
    ru: 'объяснять',
    transcription: '[мадьяраз]',
    examples: [
      { hu: 'Magyarázd meg!', ru: 'Объясни!' },
      { hu: 'Mit magyarázol?', ru: 'Что ты объясняешь?' },
      { hu: 'Megmagyarázom.', ru: 'Я объясню.' },
    ]
  },
  {
    hu: 'kérdez',
    ru: 'спрашивать',
    transcription: '[кэрдэз]',
    examples: [
      { hu: 'Kérdezek valamit.', ru: 'Я спрошу кое-что.' },
      { hu: 'Miért kérdezel?', ru: 'Почему ты спрашиваешь?' },
      { hu: 'Kérdezz bátran!', ru: 'Спрашивай смело!' },
    ]
  },
  {
    hu: 'válaszol',
    ru: 'отвечать',
    transcription: '[валосол]',
    examples: [
      { hu: 'Válaszolok.', ru: 'Я отвечаю.' },
      { hu: 'Miért nem válaszolsz?', ru: 'Почему ты не отвечаешь?' },
      { hu: 'Válaszolj a kérdésre!', ru: 'Ответь на вопрос!' },
    ]
  },
  {
    hu: 'köszön',
    ru: 'благодарить, здороваться',
    transcription: '[кёсён]',
    examples: [
      { hu: 'Köszönöm!', ru: 'Спасибо!' },
      { hu: 'Köszönt mindenkit.', ru: 'Он поздоровался со всеми.' },
      { hu: 'Hogyan köszönsz?', ru: 'Как ты здороваешься?' },
    ]
  },
  {
    hu: 'épít',
    ru: 'строить',
    transcription: '[эпит]',
    examples: [
      { hu: 'Házat épít.', ru: 'Он строит дом.' },
      { hu: 'Mit építesz?', ru: 'Что ты строишь?' },
      { hu: 'Új iskolát építenek.', ru: 'Они строят новую школу.' },
    ]
  },
  {
    hu: 'javít',
    ru: 'ремонтировать',
    transcription: '[явит]',
    examples: [
      { hu: 'Javítom az autót.', ru: 'Я ремонтирую машину.' },
      { hu: 'Ki javítja meg?', ru: 'Кто это починит?' },
      { hu: 'Javíts ki engem!', ru: 'Поправь меня!' },
    ]
  },
  {
    hu: 'tör',
    ru: 'ломать',
    transcription: '[тёр]',
    examples: [
      { hu: 'Eltörte a poharat.', ru: 'Он разбил стакан.' },
      { hu: 'Vigyázz, ne törd el!', ru: 'Осторожно, не сломай!' },
      { hu: 'Eltört.', ru: 'Сломалось/разбилось.' },
    ]
  },
  {
    hu: 'visel',
    ru: 'носить (одежду)',
    transcription: '[вишэл]',
    examples: [
      { hu: 'Kalapot visel.', ru: 'Он носит шляпу.' },
      { hu: 'Mit viselsz?', ru: 'Что ты носишь?' },
      { hu: 'Egyenruhát visel.', ru: 'Он носит форму.' },
    ]
  },
  {
    hu: 'dob',
    ru: 'бросать',
    transcription: '[доб]',
    examples: [
      { hu: 'Dobd ide!', ru: 'Брось сюда!' },
      { hu: 'Dobj egy labdát!', ru: 'Брось мяч!' },
      { hu: 'Ő messzire dob.', ru: 'Он бросает далеко.' },
    ]
  },
  {
    hu: 'fog',
    ru: 'держать',
    transcription: '[фог]',
    examples: [
      { hu: 'Fogd meg!', ru: 'Держи!' },
      { hu: 'Fogom a kezét.', ru: 'Я держу его руку.' },
      { hu: 'Ne engedd el, fogd!', ru: 'Не отпускай, держи!' },
    ]
  },
  {
    hu: 'emel',
    ru: 'поднимать',
    transcription: '[эмэл]',
    examples: [
      { hu: 'Emeld fel!', ru: 'Подними!' },
      { hu: 'Emelem a táskát.', ru: 'Я поднимаю сумку.' },
      { hu: 'Nehéz emelni.', ru: 'Тяжело поднимать.' },
    ]
  },
  {
    hu: 'tesz',
    ru: 'класть, делать',
    transcription: '[тэс]',
    examples: [
      { hu: 'Tedd le!', ru: 'Положи!' },
      { hu: 'Hova tetted?', ru: 'Куда ты положил?' },
      { hu: 'Teszek valamit.', ru: 'Я кое-что делаю.' },
    ]
  },
  {
    hu: 'mutat',
    ru: 'показывать',
    transcription: '[мутот]',
    examples: [
      { hu: 'Mutasd meg!', ru: 'Покажи!' },
      { hu: 'Mit mutatsz?', ru: 'Что ты показываешь?' },
      { hu: 'Megmutatom a térképet.', ru: 'Я покажу карту.' },
    ]
  },
  {
    hu: 'enged',
    ru: 'разрешать',
    transcription: '[энгэд]',
    examples: [
      { hu: 'Engeded?', ru: 'Ты разрешаешь?' },
      { hu: 'Nem engedem.', ru: 'Я не разрешаю.' },
      { hu: 'Engedd el!', ru: 'Отпусти!' },
    ]
  },
  {
    hu: 'próbál',
    ru: 'пробовать',
    transcription: '[пробал]',
    examples: [
      { hu: 'Próbálom.', ru: 'Я пробую.' },
      { hu: 'Próbáld ki!', ru: 'Попробуй!' },
      { hu: 'Megpróbálom.', ru: 'Я попробую.' },
    ]
  },
  {
    hu: 'sikerül',
    ru: 'получаться',
    transcription: '[шикэрюль]',
    examples: [
      { hu: 'Sikerült!', ru: 'Получилось!' },
      { hu: 'Nem sikerül.', ru: 'Не получается.' },
      { hu: 'Remélem, sikerül.', ru: 'Надеюсь, получится.' },
    ]
  },
  {
    hu: 'kezd',
    ru: 'начинать',
    transcription: '[кэзд]',
    examples: [
      { hu: 'Kezdjük!', ru: 'Начнём!' },
      { hu: 'Mikor kezded?', ru: 'Когда ты начнёшь?' },
      { hu: 'Kezdem a munkát.', ru: 'Я начинаю работу.' },
    ]
  },
  {
    hu: 'fejez',
    ru: 'заканчивать',
    transcription: '[фэйэз]',
    examples: [
      { hu: 'Befejezem.', ru: 'Я заканчиваю.' },
      { hu: 'Mikor fejezed be?', ru: 'Когда ты закончишь?' },
      { hu: 'Fejezd be!', ru: 'Заканчивай!' },
    ]
  },
  {
    hu: 'folytat',
    ru: 'продолжать',
    transcription: '[фойтот]',
    examples: [
      { hu: 'Folytasd!', ru: 'Продолжай!' },
      { hu: 'Folytatom holnap.', ru: 'Я продолжу завтра.' },
      { hu: 'Nem folytatjuk.', ru: 'Мы не продолжаем.' },
    ]
  },
  {
    hu: 'változik',
    ru: 'меняться',
    transcription: '[валтозик]',
    examples: [
      { hu: 'Minden változik.', ru: 'Всё меняется.' },
      { hu: 'Az idő változik.', ru: 'Погода меняется.' },
      { hu: 'Sokat változtál.', ru: 'Ты сильно изменился.' },
    ]
  },
  {
    hu: 'marad',
    ru: 'оставаться',
    transcription: '[мород]',
    examples: [
      { hu: 'Maradok.', ru: 'Я остаюсь.' },
      { hu: 'Meddig maradsz?', ru: 'Как долго ты останешься?' },
      { hu: 'Maradj itt!', ru: 'Оставайся здесь!' },
    ]
  },
  {
    hu: 'fut',
    ru: 'бегать',
    transcription: '[фут]',
    examples: [
      { hu: 'Futok minden reggel.', ru: 'Я бегаю каждое утро.' },
      { hu: 'Fuss!', ru: 'Беги!' },
      { hu: 'Gyorsan fut.', ru: 'Он быстро бегает.' },
    ]
  },
  {
    hu: 'ugrik',
    ru: 'прыгать',
    transcription: '[угрик]',
    examples: [
      { hu: 'Ugorj!', ru: 'Прыгай!' },
      { hu: 'Magasra ugrik.', ru: 'Он прыгает высоко.' },
      { hu: 'Ne ugorj!', ru: 'Не прыгай!' },
    ]
  },
  {
    hu: 'úszik',
    ru: 'плавать',
    transcription: '[усик]',
    examples: [
      { hu: 'Úszom a tóban.', ru: 'Я плаваю в озере.' },
      { hu: 'Tudsz úszni?', ru: 'Ты умеешь плавать?' },
      { hu: 'Ő jól úszik.', ru: 'Он хорошо плавает.' },
    ]
  },
  {
    hu: 'vezet',
    ru: 'вести, управлять',
    transcription: '[вэзэт]',
    examples: [
      { hu: 'Vezetek.', ru: 'Я веду (машину).' },
      { hu: 'Tudsz vezetni?', ru: 'Ты умеешь водить?' },
      { hu: 'Ő gyorsan vezet.', ru: 'Он быстро едет.' },
    ]
  },
  {
    hu: 'rajzol',
    ru: 'рисовать',
    transcription: '[райзол]',
    examples: [
      { hu: 'Rajzolok egy képet.', ru: 'Я рисую картинку.' },
      { hu: 'Rajzolj nekem!', ru: 'Нарисуй мне!' },
      { hu: 'Ő szépen rajzol.', ru: 'Он красиво рисует.' },
    ]
  },
  {
    hu: 'fest',
    ru: 'красить, рисовать (красками)',
    transcription: '[фэшт]',
    examples: [
      { hu: 'Festem a falat.', ru: 'Я крашу стену.' },
      { hu: 'Mit festesz?', ru: 'Что ты рисуешь?' },
      { hu: 'Ő olajképet fest.', ru: 'Он рисует маслом.' },
    ]
  },
  {
    hu: 'takarít',
    ru: 'убирать',
    transcription: '[токорит]',
    examples: [
      { hu: 'Takarítok.', ru: 'Я убираю.' },
      { hu: 'Mikor takarítasz?', ru: 'Когда ты убираешь?' },
      { hu: 'Takarítsuk ki a szobát!', ru: 'Уберём комнату!' },
    ]
  },
  {
    hu: 'rak',
    ru: 'складывать, класть',
    transcription: '[рок]',
    examples: [
      { hu: 'Rakd el!', ru: 'Убери/сложи!' },
      { hu: 'Hova rakod?', ru: 'Куда ты кладёшь?' },
      { hu: 'Berakom a táskába.', ru: 'Я кладу в сумку.' },
    ]
  },
  {
    hu: 'köt',
    ru: 'завязывать, вязать',
    transcription: '[кёт]',
    examples: [
      { hu: 'Kösd meg!', ru: 'Завяжи!' },
      { hu: 'Köti a cipőfűzőt.', ru: 'Он завязывает шнурок.' },
      { hu: 'Nem tudok kötni.', ru: 'Я не умею вязать.' },
    ]
  },
  {
    hu: 'vág',
    ru: 'резать',
    transcription: '[ваг]',
    examples: [
      { hu: 'Vágd fel!', ru: 'Нарежь!' },
      { hu: 'Vágom a kenyeret.', ru: 'Я режу хлеб.' },
      { hu: 'Óvatosan vágj!', ru: 'Режь осторожно!' },
    ]
  },
  {
    hu: 'mos',
    ru: 'мыть',
    transcription: '[мош]',
    examples: [
      { hu: 'Mosok.', ru: 'Я мою.' },
      { hu: 'Mosd meg a kezed!', ru: 'Вымой руки!' },
      { hu: 'Mosógéppel mosok.', ru: 'Я стираю в машинке.' },
    ]
  },
  {
    hu: 'tölt',
    ru: 'наполнять',
    transcription: '[тёльт]',
    examples: [
      { hu: 'Töltsd meg!', ru: 'Наполни!' },
      { hu: 'Töltöm a poharat.', ru: 'Я наполняю стакан.' },
      { hu: 'Töltsd fel a telefont!', ru: 'Зарядь телефон!' },
    ]
  },
  {
    hu: 'zavar',
    ru: 'мешать, беспокоить',
    transcription: '[зовор]',
    examples: [
      { hu: 'Ne zavarj!', ru: 'Не мешай!' },
      { hu: 'Zavarlak?', ru: 'Я тебе мешаю?' },
      { hu: 'Zavar a zaj.', ru: 'Шум мешает.' },
    ]
  },
  {
    hu: 'kínál',
    ru: 'предлагать',
    transcription: '[кинал]',
    examples: [
      { hu: 'Kínálom egy kávéval.', ru: 'Я угощаю его кофе.' },
      { hu: 'Mit kínálsz?', ru: 'Что ты предлагаешь?' },
      { hu: 'Kínálj meg!', ru: 'Угости меня!' },
    ]
  },
  {
    hu: 'választ',
    ru: 'выбирать',
    transcription: '[валост]',
    examples: [
      { hu: 'Válassz egyet!', ru: 'Выбери одно!' },
      { hu: 'Mit választasz?', ru: 'Что ты выбираешь?' },
      { hu: 'Nehéz választani.', ru: 'Трудно выбирать.' },
    ]
  },
];

/* ── Render verb list ── */
const verbsList = document.getElementById('verbs-list');

function renderVerbs(list) {
  verbsList.innerHTML = '';
  if (list.length === 0) {
    verbsList.innerHTML = '<p class="no-results">Ничего не найдено</p>';
    return;
  }
  list.forEach((verb, idx) => {
    const card = document.createElement('div');
    card.className = 'verb-card';
    card.dataset.idx = idx;
    card.innerHTML = `
      <div class="verb-card-left">
        <span class="verb-hu">${verb.hu}</span>
        <span class="verb-ru">${verb.ru}</span>
      </div>
      <span class="verb-arrow">›</span>
    `;
    card.addEventListener('click', () => openModal(verb));
    verbsList.appendChild(card);
  });
}

renderVerbs(verbs);

/* ── Search ── */
document.getElementById('verb-search').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = q
    ? verbs.filter(v => v.hu.toLowerCase().includes(q) || v.ru.toLowerCase().includes(q))
    : verbs;
  renderVerbs(filtered);
});

/* ── Noun data ── */
const nouns = [
  // ЛЮДИ
  { topic:'people', hu:'ember',    ru:'человек',      transcription:'[эмбэр]',   examples:[{hu:'Sok ember van itt.',ru:'Здесь много людей.'},{hu:'Az emberek sétálnak.',ru:'Люди гуляют.'},{hu:'Jó ember.',ru:'Хороший человек.'}] },
  { topic:'people', hu:'férfi',    ru:'мужчина',      transcription:'[фэрфи]',   examples:[{hu:'Ez a férfi tanár.',ru:'Этот мужчина — учитель.'},{hu:'Egy férfi vár.',ru:'Ждёт мужчина.'},{hu:'Fiatal férfi.',ru:'Молодой мужчина.'}] },
  { topic:'people', hu:'nő',       ru:'женщина',      transcription:'[нё]',      examples:[{hu:'A nő mosolyog.',ru:'Женщина улыбается.'},{hu:'Ez a nő orvos.',ru:'Эта женщина — врач.'},{hu:'Szép nő.',ru:'Красивая женщина.'}] },
  { topic:'people', hu:'gyerek',   ru:'ребёнок',      transcription:'[дьэрэк]',  examples:[{hu:'A gyerek játszik.',ru:'Ребёнок играет.'},{hu:'Hány gyereked van?',ru:'Сколько у тебя детей?'},{hu:'A gyerekek nevetnek.',ru:'Дети смеются.'}] },
  { topic:'people', hu:'fiú',      ru:'мальчик, сын', transcription:'[фиу]',     examples:[{hu:'A fiú focizik.',ru:'Мальчик играет в футбол.'},{hu:'Ez az én fiam.',ru:'Это мой сын.'},{hu:'Kis fiú.',ru:'Маленький мальчик.'}] },
  { topic:'people', hu:'lány',     ru:'девочка, дочь',transcription:'[лань]',    examples:[{hu:'A lány táncol.',ru:'Девочка танцует.'},{hu:'Ez az én lányom.',ru:'Это моя дочь.'},{hu:'Szép lány.',ru:'Красивая девушка.'}] },
  { topic:'people', hu:'apa',      ru:'папа',         transcription:'[опо]',     examples:[{hu:'Az apám mérnök.',ru:'Мой папа — инженер.'},{hu:'Hol az apád?',ru:'Где твой папа?'},{hu:'Apa, segíts!',ru:'Папа, помоги!'}] },
  { topic:'people', hu:'anya',     ru:'мама',         transcription:'[оньо]',    examples:[{hu:'Az anyám főz.',ru:'Моя мама готовит.'},{hu:'Hívom az anyámat.',ru:'Я звоню маме.'},{hu:'Anya, gyere!',ru:'Мама, иди сюда!'}] },
  { topic:'people', hu:'férj',     ru:'муж',          transcription:'[фэрй]',    examples:[{hu:'A férjem dolgozik.',ru:'Мой муж работает.'},{hu:'Van férjed?',ru:'У тебя есть муж?'},{hu:'Ő a férjem.',ru:'Это мой муж.'}] },
  { topic:'people', hu:'feleség',  ru:'жена',         transcription:'[фэлэшэг]', examples:[{hu:'A feleségem orvos.',ru:'Моя жена — врач.'},{hu:'Van feleséged?',ru:'У тебя есть жена?'},{hu:'Ő a feleségem.',ru:'Это моя жена.'}] },
  { topic:'people', hu:'barát',    ru:'друг',         transcription:'[борат]',   examples:[{hu:'A barátom jön.',ru:'Мой друг идёт.'},{hu:'Hol a barátod?',ru:'Где твой друг?'},{hu:'Jó barát.',ru:'Хороший друг.'}] },
  { topic:'people', hu:'kolléga',  ru:'коллега',      transcription:'[коллэго]', examples:[{hu:'A kollégám segít.',ru:'Мой коллега помогает.'},{hu:'Ő a kollégám.',ru:'Он мой коллега.'},{hu:'Jó kollégák.',ru:'Хорошие коллеги.'}] },
  { topic:'people', hu:'szomszéd', ru:'сосед',        transcription:'[сомсэд]',  examples:[{hu:'A szomszédom zajos.',ru:'Мой сосед шумный.'},{hu:'Köszönök a szomszédnak.',ru:'Здороваюсь с соседом.'},{hu:'Jó szomszéd.',ru:'Хороший сосед.'}] },
  { topic:'people', hu:'orvos',    ru:'врач',         transcription:'[орвош]',   examples:[{hu:'Az orvos vizsgál.',ru:'Врач осматривает.'},{hu:'Kell az orvos.',ru:'Нужен врач.'},{hu:'Jó orvos.',ru:'Хороший врач.'}] },
  { topic:'people', hu:'tanár',    ru:'учитель',      transcription:'[тонар]',   examples:[{hu:'A tanár magyaráz.',ru:'Учитель объясняет.'},{hu:'Ő a tanárom.',ru:'Он мой учитель.'},{hu:'Jó tanár.',ru:'Хороший учитель.'}] },
  { topic:'people', hu:'főnök',    ru:'начальник',    transcription:'[фёнёк]',   examples:[{hu:'A főnök vár.',ru:'Начальник ждёт.'},{hu:'Ő a főnököm.',ru:'Он мой начальник.'},{hu:'A főnök utazik.',ru:'Начальник в командировке.'}] },
  { topic:'people', hu:'rendőr',   ru:'полицейский',  transcription:'[рэндёр]',  examples:[{hu:'A rendőr segít.',ru:'Полицейский помогает.'},{hu:'Hívjunk rendőrt!',ru:'Вызовем полицию!'},{hu:'A rendőr int.',ru:'Полицейский машет рукой.'}] },
  { topic:'people', hu:'eladó',    ru:'продавец',     transcription:'[элодо]',   examples:[{hu:'Az eladó segít.',ru:'Продавец помогает.'},{hu:'Hol az eladó?',ru:'Где продавец?'},{hu:'Az eladó mosolyog.',ru:'Продавец улыбается.'}] },
  { topic:'people', hu:'pincér',   ru:'официант',     transcription:'[пинцэр]',  examples:[{hu:'A pincér jön.',ru:'Официант идёт.'},{hu:'Kérem a pincért.',ru:'Позовите официанта.'},{hu:'A pincér hoz valamit.',ru:'Официант приносит что-то.'}] },
  { topic:'people', hu:'sofőr',    ru:'водитель',     transcription:'[шофёр]',   examples:[{hu:'A sofőr vár.',ru:'Водитель ждёт.'},{hu:'Ő a sofőröm.',ru:'Он мой водитель.'},{hu:'A sofőr gyorsan vezet.',ru:'Водитель быстро едет.'}] },
  // ТЕЛО И ЗДОРОВЬЕ
  { topic:'body', hu:'fej',       ru:'голова',    transcription:'[фэй]',      examples:[{hu:'Fáj a fejem.',ru:'У меня болит голова.'},{hu:'Mosd meg a fejed!',ru:'Вымой голову!'},{hu:'Nagy fej.',ru:'Большая голова.'}] },
  { topic:'body', hu:'kéz',       ru:'рука',      transcription:'[кэз]',      examples:[{hu:'Mosd meg a kezed!',ru:'Вымой руки!'},{hu:'A kezem fáj.',ru:'У меня болит рука.'},{hu:'Nyújtsd ki a kezed!',ru:'Протяни руку!'}] },
  { topic:'body', hu:'láb',       ru:'нога',      transcription:'[лаб]',      examples:[{hu:'Fáj a lábam.',ru:'У меня болит нога.'},{hu:'A lábam elfáradt.',ru:'Моя нога устала.'},{hu:'Emeld fel a lábad!',ru:'Подними ногу!'}] },
  { topic:'body', hu:'szem',      ru:'глаз',      transcription:'[сэм]',      examples:[{hu:'Csukd be a szemed!',ru:'Закрой глаза!'},{hu:'A szemem fáj.',ru:'У меня болит глаз.'},{hu:'Kék szem.',ru:'Голубые глаза.'}] },
  { topic:'body', hu:'fül',       ru:'ухо',       transcription:'[фюль]',     examples:[{hu:'Fáj a fülem.',ru:'У меня болит ухо.'},{hu:'A fülem zúg.',ru:'У меня звенит в ухе.'},{hu:'Nagy fül.',ru:'Большое ухо.'}] },
  { topic:'body', hu:'száj',      ru:'рот',       transcription:'[сай]',      examples:[{hu:'Nyisd ki a szád!',ru:'Открой рот!'},{hu:'Tedd be a szád!',ru:'Закрой рот!'},{hu:'A szám fáj.',ru:'У меня болит рот.'}] },
  { topic:'body', hu:'has',       ru:'живот',     transcription:'[хош]',      examples:[{hu:'Fáj a hasam.',ru:'У меня болит живот.'},{hu:'Éhes a hasam.',ru:'Живот голодный.'},{hu:'A hasam tele van.',ru:'Живот полный.'}] },
  { topic:'body', hu:'hát',       ru:'спина',     transcription:'[хат]',      examples:[{hu:'Fáj a hátam.',ru:'У меня болит спина.'},{hu:'A hátam fáradt.',ru:'Спина устала.'},{hu:'Egyenes hát.',ru:'Прямая спина.'}] },
  { topic:'body', hu:'fog',       ru:'зуб',       transcription:'[фог]',      examples:[{hu:'Fáj a fogam.',ru:'У меня болит зуб.'},{hu:'Mosd meg a fogad!',ru:'Почисти зубы!'},{hu:'Fogat mosok.',ru:'Я чищу зубы.'}] },
  { topic:'body', hu:'szív',      ru:'сердце',    transcription:'[сив]',      examples:[{hu:'Fáj a szívem.',ru:'У меня болит сердце.'},{hu:'Egészséges szív.',ru:'Здоровое сердце.'},{hu:'A szívem dobog.',ru:'Моё сердце бьётся.'}] },
  { topic:'body', hu:'gyógyszer', ru:'лекарство', transcription:'[дьёдьсэр]', examples:[{hu:'Gyógyszert szedek.',ru:'Я принимаю лекарство.'},{hu:'Van gyógyszer?',ru:'Есть лекарство?'},{hu:'Kell gyógyszer.',ru:'Нужно лекарство.'}] },
  { topic:'body', hu:'kórház',    ru:'больница',  transcription:'[корхаз]',   examples:[{hu:'A kórházban vagyok.',ru:'Я в больнице.'},{hu:'Menjünk kórházba!',ru:'Пойдём в больницу!'},{hu:'Közel van a kórház.',ru:'Больница близко.'}] },
  { topic:'body', hu:'recept',    ru:'рецепт',    transcription:'[рэцэпт]',   examples:[{hu:'Van recepted?',ru:'У тебя есть рецепт?'},{hu:'Kell egy recept.',ru:'Нужен рецепт.'},{hu:'Az orvos receptet ír.',ru:'Врач выписывает рецепт.'}] },
  { topic:'body', hu:'fájdalom',  ru:'боль',      transcription:'[файдолом]', examples:[{hu:'Nagy a fájdalom.',ru:'Боль сильная.'},{hu:'Érzem a fájdalmat.',ru:'Я чувствую боль.'},{hu:'Csillapítom a fájdalmat.',ru:'Я облегчаю боль.'}] },
  { topic:'body', hu:'betegség',  ru:'болезнь',   transcription:'[бэтэгшэг]', examples:[{hu:'Súlyos betegség.',ru:'Серьёзная болезнь.'},{hu:'Mi a betegség?',ru:'Что за болезнь?'},{hu:'Gyógyítom a betegséget.',ru:'Я лечу болезнь.'}] },
  // ЕДА И НАПИТКИ
  { topic:'food', hu:'kenyér',   ru:'хлеб',     transcription:'[кэньэр]',   examples:[{hu:'Kenyeret veszek.',ru:'Я покупаю хлеб.'},{hu:'Kérek egy kenyeret.',ru:'Дайте хлеб, пожалуйста.'},{hu:'Friss kenyér.',ru:'Свежий хлеб.'}] },
  { topic:'food', hu:'víz',      ru:'вода',     transcription:'[виз]',      examples:[{hu:'Kérek egy pohár vizet.',ru:'Мне стакан воды.'},{hu:'A víz hideg.',ru:'Вода холодная.'},{hu:'Iszom egy kis vizet.',ru:'Я пью немного воды.'}] },
  { topic:'food', hu:'tej',      ru:'молоко',   transcription:'[тэй]',      examples:[{hu:'Kérek egy pohár tejet.',ru:'Мне стакан молока.'},{hu:'A tej friss.',ru:'Молоко свежее.'},{hu:'Tejes kávé.',ru:'Кофе с молоком.'}] },
  { topic:'food', hu:'kávé',     ru:'кофе',     transcription:'[кавэ]',     examples:[{hu:'Kérek egy kávét.',ru:'Мне кофе, пожалуйста.'},{hu:'Erős kávé.',ru:'Крепкий кофе.'},{hu:'Reggel kávét iszom.',ru:'Утром я пью кофе.'}] },
  { topic:'food', hu:'tea',      ru:'чай',      transcription:'[тэо]',      examples:[{hu:'Kérek egy teát.',ru:'Мне чай, пожалуйста.'},{hu:'Forró tea.',ru:'Горячий чай.'},{hu:'Zöld tea.',ru:'Зелёный чай.'}] },
  { topic:'food', hu:'hús',      ru:'мясо',     transcription:'[хуш]',      examples:[{hu:'Húst eszem.',ru:'Я ем мясо.'},{hu:'Friss hús.',ru:'Свежее мясо.'},{hu:'Nem eszem húst.',ru:'Я не ем мясо.'}] },
  { topic:'food', hu:'hal',      ru:'рыба',     transcription:'[хол]',      examples:[{hu:'Halat eszem.',ru:'Я ем рыбу.'},{hu:'Friss hal.',ru:'Свежая рыба.'},{hu:'Sült hal.',ru:'Жареная рыба.'}] },
  { topic:'food', hu:'tojás',    ru:'яйцо',     transcription:'[тояш]',     examples:[{hu:'Tojást eszek.',ru:'Я ем яйцо.'},{hu:'Két tojás kell.',ru:'Нужно два яйца.'},{hu:'Főtt tojás.',ru:'Варёное яйцо.'}] },
  { topic:'food', hu:'sajt',     ru:'сыр',      transcription:'[шайт]',     examples:[{hu:'Sajtot eszek.',ru:'Я ем сыр.'},{hu:'Finom sajt.',ru:'Вкусный сыр.'},{hu:'Kenyérrel és sajttal.',ru:'С хлебом и сыром.'}] },
  { topic:'food', hu:'zöldség',  ru:'овощи',    transcription:'[зёльдшэг]', examples:[{hu:'Zöldséget eszem.',ru:'Я ем овощи.'},{hu:'Friss zöldség.',ru:'Свежие овощи.'},{hu:'Sok zöldséget egyél!',ru:'Ешь больше овощей!'}] },
  { topic:'food', hu:'gyümölcs', ru:'фрукты',   transcription:'[дьюмёльч]', examples:[{hu:'Gyümölcsöt eszem.',ru:'Я ем фрукты.'},{hu:'Friss gyümölcs.',ru:'Свежие фрукты.'},{hu:'Milyen gyümölcsöt szeretsz?',ru:'Какие фрукты ты любишь?'}] },
  { topic:'food', hu:'leves',    ru:'суп',      transcription:'[лэвэш]',    examples:[{hu:'Levest eszem.',ru:'Я ем суп.'},{hu:'Meleg leves.',ru:'Тёплый суп.'},{hu:'Kérek egy tányér levest.',ru:'Дайте тарелку супа.'}] },
  { topic:'food', hu:'étel',     ru:'еда, блюдо',transcription:'[этэл]',    examples:[{hu:'Mi az étel?',ru:'Что это за блюдо?'},{hu:'Finom étel.',ru:'Вкусная еда.'},{hu:'Magyar étel.',ru:'Венгерская еда.'}] },
  { topic:'food', hu:'ital',     ru:'напиток',  transcription:'[итол]',     examples:[{hu:'Mit kérsz italnak?',ru:'Что ты хочешь выпить?'},{hu:'Hideg ital.',ru:'Холодный напиток.'},{hu:'Kérek egy italt.',ru:'Дайте мне напиток.'}] },
  { topic:'food', hu:'bor',      ru:'вино',     transcription:'[бор]',      examples:[{hu:'Kérek egy pohár bort.',ru:'Мне бокал вина.'},{hu:'Magyar bor.',ru:'Венгерское вино.'},{hu:'Vörös bor.',ru:'Красное вино.'}] },
  { topic:'food', hu:'sör',      ru:'пиво',     transcription:'[шёр]',      examples:[{hu:'Kérek egy sört.',ru:'Мне пива, пожалуйста.'},{hu:'Hideg sör.',ru:'Холодное пиво.'},{hu:'Magyar sör.',ru:'Венгерское пиво.'}] },
  { topic:'food', hu:'cukor',    ru:'сахар',    transcription:'[цукор]',    examples:[{hu:'Cukrot teszek a kávéba.',ru:'Я кладу сахар в кофе.'},{hu:'Kérsz cukrot?',ru:'Хочешь сахар?'},{hu:'Kevés cukor.',ru:'Немного сахара.'}] },
  { topic:'food', hu:'só',       ru:'соль',     transcription:'[шо]',       examples:[{hu:'Kérem a sót.',ru:'Передайте соль.'},{hu:'Sós étel.',ru:'Солёная еда.'},{hu:'Adj sót!',ru:'Дай соль!'}] },
  { topic:'food', hu:'olaj',     ru:'масло',    transcription:'[олой]',     examples:[{hu:'Olajjal főzök.',ru:'Я готовлю на масле.'},{hu:'Olívaolaj.',ru:'Оливковое масло.'},{hu:'Kevés olaj kell.',ru:'Нужно немного масла.'}] },
  { topic:'food', hu:'számla',   ru:'счёт',     transcription:'[самло]',    examples:[{hu:'Kérem a számlát.',ru:'Счёт, пожалуйста.'},{hu:'Fizetek a számlát.',ru:'Я оплачиваю счёт.'},{hu:'Mennyi a számla?',ru:'Сколько стоит счёт?'}] },
  // ДОМ И БЫТ
  { topic:'home', hu:'ház',         ru:'дом',         transcription:'[хаз]',      examples:[{hu:'Nagy ház.',ru:'Большой дом.'},{hu:'Ez a mi házunk.',ru:'Это наш дом.'},{hu:'Megveszem a házat.',ru:'Я куплю дом.'}] },
  { topic:'home', hu:'lakás',       ru:'квартира',     transcription:'[локаш]',    examples:[{hu:'Kis lakás.',ru:'Маленькая квартира.'},{hu:'Bérelek egy lakást.',ru:'Я арендую квартиру.'},{hu:'Hol a lakásod?',ru:'Где твоя квартира?'}] },
  { topic:'home', hu:'szoba',       ru:'комната',      transcription:'[собо]',     examples:[{hu:'Nagy szoba.',ru:'Большая комната.'},{hu:'Hány szobás a lakás?',ru:'Сколько комнат в квартире?'},{hu:'A szobám rendezett.',ru:'Моя комната убрана.'}] },
  { topic:'home', hu:'konyha',      ru:'кухня',        transcription:'[конья]',    examples:[{hu:'A konyhában főzök.',ru:'Я готовлю на кухне.'},{hu:'Nagy konyha.',ru:'Большая кухня.'},{hu:'A konyha tiszta.',ru:'Кухня чистая.'}] },
  { topic:'home', hu:'fürdőszoba',  ru:'ванная',       transcription:'[фюрдёсобо]',examples:[{hu:'A fürdőszobában vagyok.',ru:'Я в ванной.'},{hu:'Nagy fürdőszoba.',ru:'Большая ванная.'},{hu:'Takarítom a fürdőszobát.',ru:'Я убираю ванную.'}] },
  { topic:'home', hu:'ajtó',        ru:'дверь',        transcription:'[ойто]',     examples:[{hu:'Nyisd ki az ajtót!',ru:'Открой дверь!'},{hu:'Az ajtó nyitva van.',ru:'Дверь открыта.'},{hu:'Zárd be az ajtót!',ru:'Закрой дверь!'}] },
  { topic:'home', hu:'ablak',       ru:'окно',         transcription:'[облок]',    examples:[{hu:'Nyisd ki az ablakot!',ru:'Открой окно!'},{hu:'Az ablak nyitva van.',ru:'Окно открыто.'},{hu:'Nagy ablak.',ru:'Большое окно.'}] },
  { topic:'home', hu:'ágy',         ru:'кровать',      transcription:'[адь]',      examples:[{hu:'Az ágyban alszom.',ru:'Я сплю в кровати.'},{hu:'Nagy ágy.',ru:'Большая кровать.'},{hu:'Az ágy puha.',ru:'Кровать мягкая.'}] },
  { topic:'home', hu:'asztal',      ru:'стол',         transcription:'[остол]',    examples:[{hu:'Az asztalnál ülök.',ru:'Я сижу за столом.'},{hu:'Nagy asztal.',ru:'Большой стол.'},{hu:'Tedd az asztalra!',ru:'Положи на стол!'}] },
  { topic:'home', hu:'szék',        ru:'стул',         transcription:'[сэк]',      examples:[{hu:'Ülj le a székre!',ru:'Садись на стул!'},{hu:'Kényelmes szék.',ru:'Удобный стул.'},{hu:'Hozz egy széket!',ru:'Принеси стул!'}] },
  { topic:'home', hu:'kulcs',       ru:'ключ',         transcription:'[кульч]',    examples:[{hu:'Hol a kulcsom?',ru:'Где мой ключ?'},{hu:'Elveszítettem a kulcsomat.',ru:'Я потерял ключ.'},{hu:'Add ide a kulcsot!',ru:'Дай ключ!'}] },
  { topic:'home', hu:'lámpa',       ru:'лампа',        transcription:'[лампо]',    examples:[{hu:'Kapcsold fel a lámpát!',ru:'Включи лампу!'},{hu:'A lámpa ég.',ru:'Лампа горит.'},{hu:'Szép lámpa.',ru:'Красивая лампа.'}] },
  { topic:'home', hu:'telefon',     ru:'телефон',      transcription:'[тэлэфон]',  examples:[{hu:'A telefonom lemerült.',ru:'Мой телефон разрядился.'},{hu:'Hol a telefonom?',ru:'Где мой телефон?'},{hu:'Hívom telefonon.',ru:'Я звоню по телефону.'}] },
  { topic:'home', hu:'számítógép',  ru:'компьютер',    transcription:'[самиточэп]', examples:[{hu:'A számítógépen dolgozom.',ru:'Я работаю на компьютере.'},{hu:'Lassú a számítógépem.',ru:'Мой компьютер медленный.'},{hu:'Új számítógép.',ru:'Новый компьютер.'}] },
  { topic:'home', hu:'pénz',        ru:'деньги',       transcription:'[пэнз]',     examples:[{hu:'Van pénzed?',ru:'У тебя есть деньги?'},{hu:'Nincs pénzem.',ru:'У меня нет денег.'},{hu:'Sok pénz.',ru:'Много денег.'}] },
  { topic:'home', hu:'táska',       ru:'сумка',        transcription:'[ташко]',    examples:[{hu:'Hol a táskám?',ru:'Где моя сумка?'},{hu:'Nagy táska.',ru:'Большая сумка.'},{hu:'Elveszítettem a táskámat.',ru:'Я потерял сумку.'}] },
  { topic:'home', hu:'ruha',        ru:'одежда',       transcription:'[руха]',     examples:[{hu:'Szép ruha.',ru:'Красивая одежда.'},{hu:'Új ruhát veszek.',ru:'Я покупаю новую одежду.'},{hu:'Ez a ruhám.',ru:'Это моя одежда.'}] },
  { topic:'home', hu:'cipő',        ru:'обувь',        transcription:'[ципё]',     examples:[{hu:'Új cipőt veszek.',ru:'Я покупаю новую обувь.'},{hu:'Szép cipő.',ru:'Красивая обувь.'},{hu:'Vedd fel a cipődet!',ru:'Надень обувь!'}] },
  { topic:'home', hu:'könyv',       ru:'книга',        transcription:'[кёньв]',    examples:[{hu:'Könyvet olvasok.',ru:'Я читаю книгу.'},{hu:'Érdekes könyv.',ru:'Интересная книга.'},{hu:'Adj egy könyvet!',ru:'Дай книгу!'}] },
  { topic:'home', hu:'újság',       ru:'газета',       transcription:'[уйшаг]',    examples:[{hu:'Újságot olvasok.',ru:'Я читаю газету.'},{hu:'Mai újság.',ru:'Сегодняшняя газета.'},{hu:'Magyar újság.',ru:'Венгерская газета.'}] },
  // ГОРОД И ТРАНСПОРТ
  { topic:'city', hu:'város',    ru:'город',        transcription:'[варош]',    examples:[{hu:'Nagy város.',ru:'Большой город.'},{hu:'Melyik városból jössz?',ru:'Из какого города ты?'},{hu:'Szeretem ezt a várost.',ru:'Я люблю этот город.'}] },
  { topic:'city', hu:'utca',     ru:'улица',        transcription:'[утцо]',     examples:[{hu:'Melyik utcában laksz?',ru:'На какой улице ты живёшь?'},{hu:'A főutcán megyek.',ru:'Я иду по главной улице.'},{hu:'Szép utca.',ru:'Красивая улица.'}] },
  { topic:'city', hu:'út',       ru:'дорога',       transcription:'[ут]',       examples:[{hu:'Hosszú út.',ru:'Длинная дорога.'},{hu:'Jó utat!',ru:'Счастливого пути!'},{hu:'Ez az út vezet oda.',ru:'Эта дорога ведёт туда.'}] },
  { topic:'city', hu:'híd',      ru:'мост',         transcription:'[хид]',      examples:[{hu:'A hídon megyek át.',ru:'Я перехожу по мосту.'},{hu:'Szép híd.',ru:'Красивый мост.'},{hu:'A Lánchíd ismert.',ru:'Цепной мост известен.'}] },
  { topic:'city', hu:'park',     ru:'парк',         transcription:'[порк]',     examples:[{hu:'A parkban sétálok.',ru:'Я гуляю в парке.'},{hu:'Szép park.',ru:'Красивый парк.'},{hu:'Menjünk a parkba!',ru:'Пойдём в парк!'}] },
  { topic:'city', hu:'bolt',     ru:'магазин',      transcription:'[болт]',     examples:[{hu:'A boltban vásárolok.',ru:'Я покупаю в магазине.'},{hu:'Mikor nyit a bolt?',ru:'Когда открывается магазин?'},{hu:'Elmegyek a boltba.',ru:'Я иду в магазин.'}] },
  { topic:'city', hu:'bank',     ru:'банк',         transcription:'[банк]',     examples:[{hu:'A bankba megyek.',ru:'Я иду в банк.'},{hu:'Pénzt veszek ki a bankból.',ru:'Я снимаю деньги из банка.'},{hu:'Hol van a bank?',ru:'Где банк?'}] },
  { topic:'city', hu:'posta',    ru:'почта',        transcription:'[пошто]',    examples:[{hu:'A postára megyek.',ru:'Я иду на почту.'},{hu:'Hol van a posta?',ru:'Где почта?'},{hu:'A postán adok fel csomagot.',ru:'Я отправляю посылку на почте.'}] },
  { topic:'city', hu:'iskola',   ru:'школа',        transcription:'[ишколо]',   examples:[{hu:'Az iskolába megyek.',ru:'Я иду в школу.'},{hu:'Hol van az iskola?',ru:'Где школа?'},{hu:'Jó iskola.',ru:'Хорошая школа.'}] },
  { topic:'city', hu:'állomás',  ru:'станция',      transcription:'[алломаш]',  examples:[{hu:'A pályaudvaron vagyok.',ru:'Я на вокзале.'},{hu:'Hol van az állomás?',ru:'Где станция?'},{hu:'A vonat az állomáson áll.',ru:'Поезд стоит на станции.'}] },
  { topic:'city', hu:'megálló',  ru:'остановка',    transcription:'[мэгалло]',  examples:[{hu:'A megállóban várok.',ru:'Я жду на остановке.'},{hu:'Hol van a megálló?',ru:'Где остановка?'},{hu:'Melyik megállónál szállok le?',ru:'На какой остановке выходить?'}] },
  { topic:'city', hu:'busz',     ru:'автобус',      transcription:'[бус]',      examples:[{hu:'Buszra szállok.',ru:'Я сажусь в автобус.'},{hu:'Mikor jön a busz?',ru:'Когда придёт автобус?'},{hu:'Buszsal megyek.',ru:'Я еду на автобусе.'}] },
  { topic:'city', hu:'villamos', ru:'трамвай',      transcription:'[вилломош]', examples:[{hu:'Villamossal megyek.',ru:'Я еду на трамвае.'},{hu:'Mikor jön a villamos?',ru:'Когда придёт трамвай?'},{hu:'A villamos megáll.',ru:'Трамвай останавливается.'}] },
  { topic:'city', hu:'metró',    ru:'метро',        transcription:'[мэтро]',    examples:[{hu:'Metróval megyek.',ru:'Я еду на метро.'},{hu:'Hol van a metró?',ru:'Где метро?'},{hu:'Melyik metróvonal ez?',ru:'Какая это ветка метро?'}] },
  { topic:'city', hu:'taxi',     ru:'такси',        transcription:'[токси]',    examples:[{hu:'Taxiba szállok.',ru:'Я сажусь в такси.'},{hu:'Hívok egy taxit.',ru:'Я вызову такси.'},{hu:'Taxival megyek.',ru:'Я еду на такси.'}] },
  { topic:'city', hu:'autó',     ru:'машина',       transcription:'[ауто]',     examples:[{hu:'Autóval megyek.',ru:'Я еду на машине.'},{hu:'Az autó gyors.',ru:'Машина быстрая.'},{hu:'Hol van az autóm?',ru:'Где моя машина?'}] },
  { topic:'city', hu:'vonat',    ru:'поезд',        transcription:'[вонот]',    examples:[{hu:'Vonatra szállok.',ru:'Я сажусь в поезд.'},{hu:'Mikor indul a vonat?',ru:'Когда отправляется поезд?'},{hu:'A vonat késik.',ru:'Поезд опаздывает.'}] },
  { topic:'city', hu:'repülő',   ru:'самолёт',      transcription:'[рэпюлё]',   examples:[{hu:'Repülőre szállok.',ru:'Я сажусь в самолёт.'},{hu:'A repülő indul.',ru:'Самолёт отправляется.'},{hu:'Repülővel utazom.',ru:'Я лечу на самолёте.'}] },
  { topic:'city', hu:'bicikli',  ru:'велосипед',    transcription:'[бицикли]',  examples:[{hu:'Biciklivel megyek.',ru:'Я еду на велосипеде.'},{hu:'Kerékpározom.',ru:'Я езжу на велосипеде.'},{hu:'Szép bicikli.',ru:'Красивый велосипед.'}] },
  { topic:'city', hu:'térkép',   ru:'карта',        transcription:'[тэркэп]',   examples:[{hu:'Megnézem a térképet.',ru:'Я смотрю карту.'},{hu:'Hol a térkép?',ru:'Где карта?'},{hu:'A térképen keresem.',ru:'Я ищу на карте.'}] },
  // РАБОТА И ИНСТРУМЕНТЫ
  { topic:'work', hu:'munka',        ru:'работа',       transcription:'[мунко]',    examples:[{hu:'Sok munkám van.',ru:'У меня много работы.'},{hu:'Jó munkát!',ru:'Удачной работы!'},{hu:'Elmegyek munkába.',ru:'Я иду на работу.'}] },
  { topic:'work', hu:'gyár',         ru:'завод',        transcription:'[дьяр]',     examples:[{hu:'A gyárban dolgozom.',ru:'Я работаю на заводе.'},{hu:'Nagy gyár.',ru:'Большой завод.'},{hu:'A gyár termel.',ru:'Завод производит.'}] },
  { topic:'work', hu:'iroda',        ru:'офис',         transcription:'[иродо]',    examples:[{hu:'Az irodában dolgozom.',ru:'Я работаю в офисе.'},{hu:'Hol van az iroda?',ru:'Где офис?'},{hu:'Az iroda nagy.',ru:'Офис большой.'}] },
  { topic:'work', hu:'gép',          ru:'станок, машина',transcription:'[гэп]',     examples:[{hu:'A gép működik.',ru:'Станок работает.'},{hu:'Nagy gép.',ru:'Большой станок.'},{hu:'A gép elromlott.',ru:'Станок сломался.'}] },
  { topic:'work', hu:'szerszám',     ru:'инструмент',   transcription:'[сэрсам]',   examples:[{hu:'Kell egy szerszám.',ru:'Нужен инструмент.'},{hu:'Hol a szerszám?',ru:'Где инструмент?'},{hu:'Jó szerszám.',ru:'Хороший инструмент.'}] },
  { topic:'work', hu:'csavar',       ru:'винт',         transcription:'[човор]',    examples:[{hu:'Beteszek egy csavart.',ru:'Я вкручиваю винт.'},{hu:'Kell egy csavar.',ru:'Нужен винт.'},{hu:'Meghúzom a csavart.',ru:'Я затягиваю винт.'}] },
  { topic:'work', hu:'kalapács',     ru:'молоток',      transcription:'[колопач]',  examples:[{hu:'A kalapáccsal ütök.',ru:'Я бью молотком.'},{hu:'Hol a kalapács?',ru:'Где молоток?'},{hu:'Nagy kalapács.',ru:'Большой молоток.'}] },
  { topic:'work', hu:'fogó',         ru:'плоскогубцы',  transcription:'[фого]',     examples:[{hu:'Kell egy fogó.',ru:'Нужны плоскогубцы.'},{hu:'A fogóval húzom.',ru:'Я тяну плоскогубцами.'},{hu:'Hol a fogó?',ru:'Где плоскогубцы?'}] },
  { topic:'work', hu:'kés',          ru:'нож',          transcription:'[кэш]',      examples:[{hu:'A késsel vágok.',ru:'Я режу ножом.'},{hu:'Éles kés.',ru:'Острый нож.'},{hu:'Hol a kés?',ru:'Где нож?'}] },
  { topic:'work', hu:'drót',         ru:'провод',       transcription:'[дрот]',     examples:[{hu:'Kell egy drót.',ru:'Нужен провод.'},{hu:'A drót szakadt.',ru:'Провод оборвался.'},{hu:'Hosszú drót.',ru:'Длинный провод.'}] },
  { topic:'work', hu:'anyag',        ru:'материал',     transcription:'[оньог]',    examples:[{hu:'Milyen anyag ez?',ru:'Что это за материал?'},{hu:'Jó anyag.',ru:'Хороший материал.'},{hu:'Kell anyag.',ru:'Нужен материал.'}] },
  { topic:'work', hu:'alkatrész',    ru:'деталь',       transcription:'[олкотрэс]', examples:[{hu:'Kell egy alkatrész.',ru:'Нужна деталь.'},{hu:'Hol az alkatrész?',ru:'Где деталь?'},{hu:'Hiányzik egy alkatrész.',ru:'Не хватает детали.'}] },
  { topic:'work', hu:'javítás',      ru:'ремонт',       transcription:'[явиташ]',   examples:[{hu:'A javítás kész.',ru:'Ремонт готов.'},{hu:'Mennyi a javítás?',ru:'Сколько стоит ремонт?'},{hu:'A javítás tart.',ru:'Ремонт продолжается.'}] },
  { topic:'work', hu:'hiba',         ru:'ошибка',       transcription:'[хибо]',     examples:[{hu:'Hiba van.',ru:'Есть ошибка.'},{hu:'Mi a hiba?',ru:'В чём ошибка?'},{hu:'Kijavítom a hibát.',ru:'Я исправляю ошибку.'}] },
  { topic:'work', hu:'projekt',      ru:'проект',       transcription:'[прожэкт]',  examples:[{hu:'A projekt kész.',ru:'Проект готов.'},{hu:'Dolgozom a projekten.',ru:'Я работаю над проектом.'},{hu:'Nagy projekt.',ru:'Большой проект.'}] },
  { topic:'work', hu:'határidő',     ru:'дедлайн',      transcription:'[хатаридё]', examples:[{hu:'Mi a határidő?',ru:'Какой дедлайн?'},{hu:'A határidő holnap.',ru:'Дедлайн завтра.'},{hu:'Tartom a határidőt.',ru:'Я соблюдаю дедлайн.'}] },
  { topic:'work', hu:'megbeszélés',  ru:'совещание',    transcription:'[мэгбэсэлэш]',examples:[{hu:'Megbeszélésre megyek.',ru:'Я иду на совещание.'},{hu:'Mikor a megbeszélés?',ru:'Когда совещание?'},{hu:'Hosszú megbeszélés.',ru:'Долгое совещание.'}] },
  { topic:'work', hu:'fizetés',      ru:'зарплата',     transcription:'[физэтэш]',  examples:[{hu:'Mikor van a fizetés?',ru:'Когда зарплата?'},{hu:'Jó a fizetés.',ru:'Хорошая зарплата.'},{hu:'Várom a fizetést.',ru:'Я жду зарплату.'}] },
  { topic:'work', hu:'szabadság',    ru:'отпуск',       transcription:'[сободшаг]', examples:[{hu:'Szabadságon vagyok.',ru:'Я в отпуске.'},{hu:'Mikor van a szabadság?',ru:'Когда отпуск?'},{hu:'Jó szabadságot!',ru:'Хорошего отпуска!'}] },
  { topic:'work', hu:'műszak',       ru:'смена',        transcription:'[мюсок]',    examples:[{hu:'Éjjeli műszak.',ru:'Ночная смена.'},{hu:'Mikor van a műszak?',ru:'Когда смена?'},{hu:'Elfogy a műszak.',ru:'Смена заканчивается.'}] },
  // ВРЕМЯ
  { topic:'time', hu:'idő',     ru:'время',          transcription:'[идё]',      examples:[{hu:'Mennyi az idő?',ru:'Который час?'},{hu:'Nincs időm.',ru:'У меня нет времени.'},{hu:'Sok idő kell.',ru:'Нужно много времени.'}] },
  { topic:'time', hu:'nap',     ru:'день',           transcription:'[ноп]',      examples:[{hu:'Jó napot!',ru:'Добрый день!'},{hu:'Egész nap dolgozom.',ru:'Я работаю весь день.'},{hu:'Szép nap van.',ru:'Хороший день.'}] },
  { topic:'time', hu:'hét',     ru:'неделя',         transcription:'[хэт]',      examples:[{hu:'Ezen a héten dolgozom.',ru:'На этой неделе я работаю.'},{hu:'Jövő héten találkozunk.',ru:'На следующей неделе встретимся.'},{hu:'Hét napja nem aludtam.',ru:'Я не спал семь дней.'}] },
  { topic:'time', hu:'hónap',   ru:'месяц',          transcription:'[хонап]',    examples:[{hu:'Melyik hónapban születtél?',ru:'В каком месяце ты родился?'},{hu:'Ezen a hónapon belül.',ru:'В этом месяце.'},{hu:'Három hónap múlva.',ru:'Через три месяца.'}] },
  { topic:'time', hu:'év',      ru:'год',            transcription:'[эв]',       examples:[{hu:'Melyik évben?',ru:'В каком году?'},{hu:'Boldog új évet!',ru:'С Новым годом!'},{hu:'Minden évben utazom.',ru:'Каждый год я путешествую.'}] },
  { topic:'time', hu:'óra',     ru:'час',            transcription:'[ора]',      examples:[{hu:'Hány óra van?',ru:'Который час?'},{hu:'Egy óra múlva.',ru:'Через час.'},{hu:'Két óráig várok.',ru:'Я жду два часа.'}] },
  { topic:'time', hu:'perc',    ru:'минута',         transcription:'[пэрц]',     examples:[{hu:'Öt perc múlva.',ru:'Через пять минут.'},{hu:'Egy percig várok.',ru:'Я жду одну минуту.'},{hu:'Nincs egy percem sem.',ru:'У меня нет ни минуты.'}] },
  { topic:'time', hu:'reggel',  ru:'утро',           transcription:'[рэггэл]',   examples:[{hu:'Reggel korán kelek.',ru:'Утром я встаю рано.'},{hu:'Jó reggelt!',ru:'Доброе утро!'},{hu:'Reggeli kávé.',ru:'Утренний кофе.'}] },
  { topic:'time', hu:'délután', ru:'после обеда',    transcription:'[дэлутан]',  examples:[{hu:'Délután találkozunk.',ru:'Встретимся после обеда.'},{hu:'Jó délutánt!',ru:'Добрый день!'},{hu:'Szabad délután.',ru:'Свободный полдень.'}] },
  { topic:'time', hu:'este',    ru:'вечер',          transcription:'[эштэ]',     examples:[{hu:'Este hazamegyek.',ru:'Вечером я иду домой.'},{hu:'Jó estét!',ru:'Добрый вечер!'},{hu:'Az esti séta.',ru:'Вечерняя прогулка.'}] },
  { topic:'time', hu:'éjszaka', ru:'ночь',           transcription:'[эйсоко]',   examples:[{hu:'Éjjel alszom.',ru:'Ночью я сплю.'},{hu:'Jó éjszakát!',ru:'Спокойной ночи!'},{hu:'Az éjszaka csendes.',ru:'Ночь тихая.'}] },
  { topic:'time', hu:'ma',      ru:'сегодня',        transcription:'[мо]',       examples:[{hu:'Ma dolgozom.',ru:'Сегодня я работаю.'},{hu:'Ma mit csinálsz?',ru:'Что ты делаешь сегодня?'},{hu:'Ma szép idő van.',ru:'Сегодня хорошая погода.'}] },
  { topic:'time', hu:'holnap',  ru:'завтра',         transcription:'[холноп]',   examples:[{hu:'Holnap találkozunk.',ru:'Завтра встретимся.'},{hu:'Mi lesz holnap?',ru:'Что будет завтра?'},{hu:'Holnap szabadnap.',ru:'Завтра выходной.'}] },
  { topic:'time', hu:'tegnap',  ru:'вчера',          transcription:'[тэгноп]',   examples:[{hu:'Tegnap dolgoztam.',ru:'Вчера я работал.'},{hu:'Mi volt tegnap?',ru:'Что было вчера?'},{hu:'Tegnap szép idő volt.',ru:'Вчера была хорошая погода.'}] },
  { topic:'time', hu:'most',    ru:'сейчас',         transcription:'[мошт]',     examples:[{hu:'Most megyek.',ru:'Сейчас я иду.'},{hu:'Mit csinálsz most?',ru:'Что ты делаешь сейчас?'},{hu:'Most nincs időm.',ru:'Сейчас у меня нет времени.'}] },
  // ПРИРОДА
  { topic:'nature', hu:'eső',    ru:'дождь',     transcription:'[эшё]',    examples:[{hu:'Esik az eső.',ru:'Идёт дождь.'},{hu:'Nincs eső.',ru:'Нет дождя.'},{hu:'Az eső megáll.',ru:'Дождь прекращается.'}] },
  { topic:'nature', hu:'hó',     ru:'снег',      transcription:'[хо]',     examples:[{hu:'Esik a hó.',ru:'Идёт снег.'},{hu:'Sok hó van.',ru:'Много снега.'},{hu:'A hó fehér.',ru:'Снег белый.'}] },
  { topic:'nature', hu:'nap',    ru:'солнце',    transcription:'[ноп]',    examples:[{hu:'Süt a nap.',ru:'Светит солнце.'},{hu:'A nap meleg.',ru:'Солнце тёплое.'},{hu:'Ma süt a nap.',ru:'Сегодня светит солнце.'}] },
  { topic:'nature', hu:'szél',   ru:'ветер',     transcription:'[сэл]',    examples:[{hu:'Fúj a szél.',ru:'Дует ветер.'},{hu:'Erős szél.',ru:'Сильный ветер.'},{hu:'Nincs szél.',ru:'Нет ветра.'}] },
  { topic:'nature', hu:'folyó',  ru:'река',      transcription:'[фойо]',   examples:[{hu:'A folyóban úszom.',ru:'Я плаваю в реке.'},{hu:'Szép folyó.',ru:'Красивая река.'},{hu:'A folyó mély.',ru:'Река глубокая.'}] },
  { topic:'nature', hu:'tó',     ru:'озеро',     transcription:'[то]',     examples:[{hu:'A tónál vagyok.',ru:'Я у озера.'},{hu:'Szép tó.',ru:'Красивое озеро.'},{hu:'A tóban úszom.',ru:'Я плаваю в озере.'}] },
  { topic:'nature', hu:'hegy',   ru:'гора',      transcription:'[хэдь]',   examples:[{hu:'A hegyen vagyok.',ru:'Я на горе.'},{hu:'Magas hegy.',ru:'Высокая гора.'},{hu:'Felmegyek a hegyre.',ru:'Я поднимаюсь на гору.'}] },
  { topic:'nature', hu:'erdő',   ru:'лес',       transcription:'[эрдё]',   examples:[{hu:'Az erdőben sétálok.',ru:'Я гуляю в лесу.'},{hu:'Nagy erdő.',ru:'Большой лес.'},{hu:'Szép erdő.',ru:'Красивый лес.'}] },
  { topic:'nature', hu:'virág',  ru:'цветок',    transcription:'[вираг]',  examples:[{hu:'Szép virág.',ru:'Красивый цветок.'},{hu:'Virágot veszek.',ru:'Я покупаю цветы.'},{hu:'A virág illatozik.',ru:'Цветок пахнет.'}] },
  { topic:'nature', hu:'fa',     ru:'дерево',    transcription:'[фо]',     examples:[{hu:'Nagy fa.',ru:'Большое дерево.'},{hu:'A fa magas.',ru:'Дерево высокое.'},{hu:'A fa alatt ülök.',ru:'Я сижу под деревом.'}] },
  { topic:'nature', hu:'állat',  ru:'животное',  transcription:'[аллот]',  examples:[{hu:'Milyen állat ez?',ru:'Что это за животное?'},{hu:'Szeretem az állatokat.',ru:'Я люблю животных.'},{hu:'Veszélyes állat.',ru:'Опасное животное.'}] },
  { topic:'nature', hu:'kutya',  ru:'собака',    transcription:'[кутьо]',  examples:[{hu:'A kutya ugat.',ru:'Собака лает.'},{hu:'Szép kutya.',ru:'Красивая собака.'},{hu:'Van kutyád?',ru:'У тебя есть собака?'}] },
  { topic:'nature', hu:'macska', ru:'кошка',     transcription:'[мочко]',  examples:[{hu:'A macska alszik.',ru:'Кошка спит.'},{hu:'Szép macska.',ru:'Красивая кошка.'},{hu:'Van macskád?',ru:'У тебя есть кошка?'}] },
  { topic:'nature', hu:'madár',  ru:'птица',     transcription:'[модар]',  examples:[{hu:'A madár énekel.',ru:'Птица поёт.'},{hu:'Szép madár.',ru:'Красивая птица.'},{hu:'A madár repül.',ru:'Птица летит.'}] },
  { topic:'nature', hu:'hal',    ru:'рыба',      transcription:'[хол]',    examples:[{hu:'A hal úszik.',ru:'Рыба плывёт.'},{hu:'Szép hal.',ru:'Красивая рыба.'},{hu:'A folyóban halak vannak.',ru:'В реке есть рыбы.'}] },
  // МАГАЗИН
  { topic:'shop', hu:'ár',           ru:'цена',          transcription:'[ар]',        examples:[{hu:'Mennyi az ár?',ru:'Какова цена?'},{hu:'Jó ár.',ru:'Хорошая цена.'},{hu:'Az ár magas.',ru:'Цена высокая.'}] },
  { topic:'shop', hu:'forint',       ru:'форинт',        transcription:'[форинт]',    examples:[{hu:'Forintban fizetek.',ru:'Я плачу форинтами.'},{hu:'Ezer forint.',ru:'Тысяча форинтов.'},{hu:'Van forintod?',ru:'У тебя есть форинты?'}] },
  { topic:'shop', hu:'euró',         ru:'евро',          transcription:'[эуро]',      examples:[{hu:'Euróban fizetek.',ru:'Я плачу евро.'},{hu:'Ötven euró.',ru:'Пятьдесят евро.'},{hu:'Elfogadnak eurót?',ru:'Принимают евро?'}] },
  { topic:'shop', hu:'pénztár',      ru:'касса',         transcription:'[пэнзтар]',   examples:[{hu:'A pénztárnál fizetek.',ru:'Я плачу на кассе.'},{hu:'Hol a pénztár?',ru:'Где касса?'},{hu:'A pénztár nyitva van.',ru:'Касса открыта.'}] },
  { topic:'shop', hu:'nyugta',       ru:'чек',           transcription:'[нюгто]',     examples:[{hu:'Kérem a nyugtát.',ru:'Дайте чек.'},{hu:'Van nyugtája?',ru:'У вас есть чек?'},{hu:'Elveszítettem a nyugtát.',ru:'Я потерял чек.'}] },
  { topic:'shop', hu:'visszajáró',   ru:'сдача',         transcription:'[виссояро]',  examples:[{hu:'Hol a visszajáró?',ru:'Где сдача?'},{hu:'Visszajáró kell.',ru:'Нужна сдача.'},{hu:'Tartsa meg a visszajárót!',ru:'Сдачи не надо!'}] },
  { topic:'shop', hu:'kosár',        ru:'корзина',       transcription:'[кошар]',     examples:[{hu:'Teszem a kosárba.',ru:'Я кладу в корзину.'},{hu:'Tele van a kosár.',ru:'Корзина полна.'},{hu:'Hol a kosár?',ru:'Где корзина?'}] },
  { topic:'shop', hu:'akció',        ru:'акция',         transcription:'[окцио]',     examples:[{hu:'Akció van!',ru:'Есть акция!'},{hu:'Jó akció.',ru:'Хорошая акция.'},{hu:'Mit tartalmaz az akció?',ru:'Что включает акция?'}] },
  { topic:'shop', hu:'méret',        ru:'размер',        transcription:'[мэрэт]',     examples:[{hu:'Milyen méret kell?',ru:'Какой размер нужен?'},{hu:'Kicsi a méret.',ru:'Размер маленький.'},{hu:'Megmutatom a méretet.',ru:'Я покажу размер.'}] },
  { topic:'shop', hu:'szín',         ru:'цвет',          transcription:'[син]',       examples:[{hu:'Milyen szín tetszik?',ru:'Какой цвет нравится?'},{hu:'Szép szín.',ru:'Красивый цвет.'},{hu:'Más szín kell.',ru:'Нужен другой цвет.'}] },
  { topic:'shop', hu:'minőség',      ru:'качество',      transcription:'[минёшэг]',   examples:[{hu:'Jó minőség.',ru:'Хорошее качество.'},{hu:'A minőség fontos.',ru:'Качество важно.'},{hu:'Milyen a minőség?',ru:'Какое качество?'}] },
  { topic:'shop', hu:'garancia',     ru:'гарантия',      transcription:'[горонцио]',  examples:[{hu:'Van garancia?',ru:'Есть гарантия?'},{hu:'Egy év garancia.',ru:'Один год гарантии.'},{hu:'A garancia lejárt.',ru:'Гарантия истекла.'}] },
  { topic:'shop', hu:'csomag',       ru:'упаковка',      transcription:'[чомог]',     examples:[{hu:'Szép csomag.',ru:'Красивая упаковка.'},{hu:'A csomag sérült.',ru:'Упаковка повреждена.'},{hu:'Kérek egy csomagot.',ru:'Дайте упаковку.'}] },
  { topic:'shop', hu:'ajándék',      ru:'подарок',       transcription:'[ояндэк]',    examples:[{hu:'Ajándékot veszek.',ru:'Я покупаю подарок.'},{hu:'Szép ajándék.',ru:'Красивый подарок.'},{hu:'Kinek az ajándék?',ru:'Кому подарок?'}] },
  { topic:'shop', hu:'kedvezmény',   ru:'скидка',        transcription:'[кэдвэзмэнь]',examples:[{hu:'Van kedvezmény?',ru:'Есть скидка?'},{hu:'Jó kedvezmény.',ru:'Хорошая скидка.'},{hu:'Mennyi a kedvezmény?',ru:'Сколько составляет скидка?'}] },
  // ДОКУМЕНТЫ
  { topic:'docs', hu:'útlevél',      ru:'паспорт',        transcription:'[утлэвэл]',    examples:[{hu:'Hol az útlevelem?',ru:'Где мой паспорт?'},{hu:'Érvényes az útlevelem.',ru:'Мой паспорт действителен.'},{hu:'Mutassa az útlevelét!',ru:'Предъявите паспорт!'}] },
  { topic:'docs', hu:'személyi',     ru:'удостоверение',  transcription:'[сэмэйи]',     examples:[{hu:'Mutassa a személyit!',ru:'Предъявите удостоверение!'},{hu:'Van személyije?',ru:'У вас есть удостоверение?'},{hu:'Hol a személyim?',ru:'Где моё удостоверение?'}] },
  { topic:'docs', hu:'vízum',        ru:'виза',           transcription:'[визум]',      examples:[{hu:'Van vízumom.',ru:'У меня есть виза.'},{hu:'Kell vízum?',ru:'Нужна виза?'},{hu:'Vízumot igénylek.',ru:'Я оформляю визу.'}] },
  { topic:'docs', hu:'engedély',     ru:'разрешение',     transcription:'[энгэдэй]',    examples:[{hu:'Van engedélye?',ru:'У вас есть разрешение?'},{hu:'Kérem az engedélyt.',ru:'Дайте разрешение.'},{hu:'Az engedély lejárt.',ru:'Разрешение истекло.'}] },
  { topic:'docs', hu:'szerződés',    ru:'договор',        transcription:'[сэрзёдэш]',   examples:[{hu:'Aláírom a szerződést.',ru:'Я подписываю договор.'},{hu:'Olvasom a szerződést.',ru:'Я читаю договор.'},{hu:'Kész a szerződés.',ru:'Договор готов.'}] },
  { topic:'docs', hu:'kérelem',      ru:'заявление',      transcription:'[кэрэлэм]',    examples:[{hu:'Kérelmet adok be.',ru:'Я подаю заявление.'},{hu:'A kérelem elfogadva.',ru:'Заявление принято.'},{hu:'Kitöltöm a kérelmet.',ru:'Я заполняю заявление.'}] },
  { topic:'docs', hu:'nyomtatvány',  ru:'бланк',          transcription:'[ньомтотвань]',examples:[{hu:'Kitöltöm a nyomtatványt.',ru:'Я заполняю бланк.'},{hu:'Hol a nyomtatvány?',ru:'Где бланк?'},{hu:'Kérem a nyomtatványt.',ru:'Дайте бланк.'}] },
  { topic:'docs', hu:'aláírás',      ru:'подпись',        transcription:'[олаираш]',    examples:[{hu:'Kérem az aláírást.',ru:'Дайте подпись.'},{hu:'Az aláírás kell.',ru:'Нужна подпись.'},{hu:'Aláírom.',ru:'Я подписываю.'}] },
  { topic:'docs', hu:'hivatal',      ru:'учреждение',     transcription:'[хивотол]',    examples:[{hu:'A hivatalba megyek.',ru:'Я иду в учреждение.'},{hu:'Hol van a hivatal?',ru:'Где учреждение?'},{hu:'A hivatal nyitva.',ru:'Учреждение открыто.'}] },
  { topic:'docs', hu:'sor',          ru:'очередь',        transcription:'[шор]',        examples:[{hu:'Sorban állok.',ru:'Я стою в очереди.'},{hu:'Hosszú a sor.',ru:'Очередь длинная.'},{hu:'Melyik sorban?',ru:'В какой очереди?'}] },
  { topic:'docs', hu:'irat',         ru:'документ',       transcription:'[ирот]',       examples:[{hu:'Hol az irat?',ru:'Где документ?'},{hu:'Az irat fontos.',ru:'Документ важен.'},{hu:'Megvan az irat.',ru:'Документ есть.'}] },
  { topic:'docs', hu:'határ',        ru:'граница',        transcription:'[хотар]',      examples:[{hu:'A határon vagyok.',ru:'Я на границе.'},{hu:'Átkelek a határon.',ru:'Я пересекаю границу.'},{hu:'A határ nyitva van.',ru:'Граница открыта.'}] },
  { topic:'docs', hu:'illeték',      ru:'пошлина',        transcription:'[иллэтэк]',    examples:[{hu:'Mennyi az illeték?',ru:'Сколько пошлина?'},{hu:'Fizetem az illetéket.',ru:'Я плачу пошлину.'},{hu:'Az illeték magas.',ru:'Пошлина высокая.'}] },
  { topic:'docs', hu:'bélyeg',       ru:'печать',         transcription:'[бэйэг]',      examples:[{hu:'Kell egy bélyeg.',ru:'Нужна печать.'},{hu:'Van bélyeg?',ru:'Есть печать?'},{hu:'Leütöm a bélyeget.',ru:'Я ставлю печать.'}] },
  { topic:'docs', hu:'ügyintéző',   ru:'чиновник',       transcription:'[юдьинтэзё]',  examples:[{hu:'Az ügyintéző segít.',ru:'Чиновник помогает.'},{hu:'Hol az ügyintéző?',ru:'Где чиновник?'},{hu:'Kérem az ügyintézőt.',ru:'Позовите чиновника.'}] },
  // ЭМОЦИИ
  { topic:'emotions', hu:'kérdés',      ru:'вопрос',          transcription:'[кэрдэш]',    examples:[{hu:'Van kérdése?',ru:'У вас есть вопрос?'},{hu:'Jó kérdés.',ru:'Хороший вопрос.'},{hu:'Felteszek egy kérdést.',ru:'Я задаю вопрос.'}] },
  { topic:'emotions', hu:'válasz',      ru:'ответ',           transcription:'[валос]',     examples:[{hu:'Mi a válasz?',ru:'Какой ответ?'},{hu:'Jó válasz.',ru:'Хороший ответ.'},{hu:'Várom a választ.',ru:'Я жду ответа.'}] },
  { topic:'emotions', hu:'probléma',    ru:'проблема',        transcription:'[проблэмо]',  examples:[{hu:'Mi a probléma?',ru:'В чём проблема?'},{hu:'Nincs probléma.',ru:'Нет проблем.'},{hu:'Megoldom a problémát.',ru:'Я решаю проблему.'}] },
  { topic:'emotions', hu:'segítség',    ru:'помощь',          transcription:'[шэгитшэг]',  examples:[{hu:'Kell segítség?',ru:'Нужна помощь?'},{hu:'Köszönöm a segítséget.',ru:'Спасибо за помощь.'},{hu:'Segítség!',ru:'Помогите!'}] },
  { topic:'emotions', hu:'köszönet',    ru:'благодарность',   transcription:'[кёсёнэт]',   examples:[{hu:'Köszönet mindenkinek.',ru:'Благодарность всем.'},{hu:'Nagy köszönet.',ru:'Большая благодарность.'},{hu:'Kifejezem a köszönetemet.',ru:'Я выражаю благодарность.'}] },
  { topic:'emotions', hu:'bocsánat',    ru:'извинение',       transcription:'[бочанот]',   examples:[{hu:'Bocsánat!',ru:'Извините!'},{hu:'Kérem a bocsánatát.',ru:'Прошу прощения.'},{hu:'Nincs mit bocsátani.',ru:'Не за что прощать.'}] },
  { topic:'emotions', hu:'öröm',        ru:'радость',         transcription:'[ёрём]',      examples:[{hu:'Nagy öröm.',ru:'Большая радость.'},{hu:'Örömmel teszem.',ru:'Делаю с радостью.'},{hu:'Az öröm látható.',ru:'Радость видна.'}] },
  { topic:'emotions', hu:'bánat',       ru:'грусть',          transcription:'[банот]',     examples:[{hu:'Nagy bánat.',ru:'Большая грусть.'},{hu:'Bánatban vagyok.',ru:'Я в грусти.'},{hu:'A bánat elmúlik.',ru:'Грусть проходит.'}] },
  { topic:'emotions', hu:'meglepetés',  ru:'удивление',       transcription:'[мэглэпэтэш]',examples:[{hu:'Nagy meglepetés!',ru:'Большой сюрприз!'},{hu:'Meglepetéssel fogadom.',ru:'Я встречаю с удивлением.'},{hu:'Szép meglepetés.',ru:'Приятный сюрприз.'}] },
  { topic:'emotions', hu:'félelem',     ru:'страх',           transcription:'[фэлэлэм]',   examples:[{hu:'Nincs félelem.',ru:'Нет страха.'},{hu:'Legyőzöm a félelmet.',ru:'Я преодолеваю страх.'},{hu:'A félelem elmúlik.',ru:'Страх проходит.'}] },
  { topic:'emotions', hu:'szeretet',    ru:'любовь',          transcription:'[сэрэтэт]',   examples:[{hu:'Nagy szeretet.',ru:'Большая любовь.'},{hu:'Szeretettel ajánlom.',ru:'Предлагаю с любовью.'},{hu:'Érzem a szeretetet.',ru:'Я чувствую любовь.'}] },
  { topic:'emotions', hu:'barátság',    ru:'дружба',          transcription:'[борачшаг]',  examples:[{hu:'Jó barátság.',ru:'Хорошая дружба.'},{hu:'A barátság fontos.',ru:'Дружба важна.'},{hu:'Régi barátság.',ru:'Старая дружба.'}] },
  { topic:'emotions', hu:'vita',        ru:'спор',            transcription:'[вито]',      examples:[{hu:'Nagy vita.',ru:'Большой спор.'},{hu:'Ne vitázz!',ru:'Не спорь!'},{hu:'A vita megoldódott.',ru:'Спор разрешился.'}] },
  { topic:'emotions', hu:'bizalom',     ru:'доверие',         transcription:'[бизолом]',   examples:[{hu:'Nagy bizalom.',ru:'Большое доверие.'},{hu:'Bízom benned.',ru:'Я доверяю тебе.'},{hu:'A bizalom fontos.',ru:'Доверие важно.'}] },
  { topic:'emotions', hu:'megértés',    ru:'понимание',       transcription:'[мэгэртэш]',  examples:[{hu:'Köszönöm a megértést.',ru:'Спасибо за понимание.'},{hu:'Megértéssel fogadom.',ru:'Я принимаю с пониманием.'},{hu:'A megértés fontos.',ru:'Понимание важно.'}] },
];

/* ── Adjective data ── */
const adjectives = [
  // РАЗМЕР И ФОРМА
  { topic:'adj', hu:'nagy',       ru:'большой',          transcription:'[надь]',       antonym:'kicsi (маленький)',     examples:[{hu:'Nagy ház.',ru:'Большой дом.'},{hu:'Ez egy nagy város.',ru:'Это большой город.'}] },
  { topic:'adj', hu:'kicsi',      ru:'маленький',        transcription:'[кичи]',       antonym:'nagy (большой)',        examples:[{hu:'Kicsi kutya.',ru:'Маленькая собака.'},{hu:'Ez egy kicsi szoba.',ru:'Это маленькая комната.'}] },
  { topic:'adj', hu:'hosszú',     ru:'длинный',          transcription:'[хоссу]',      antonym:'rövid (короткий)',      examples:[{hu:'Hosszú út.',ru:'Длинная дорога.'},{hu:'Hosszú haj.',ru:'Длинные волосы.'}] },
  { topic:'adj', hu:'rövid',      ru:'короткий',         transcription:'[рёвид]',      antonym:'hosszú (длинный)',      examples:[{hu:'Rövid film.',ru:'Короткий фильм.'},{hu:'Rövid szoknya.',ru:'Короткая юбка.'}] },
  { topic:'adj', hu:'magas',      ru:'высокий',          transcription:'[могош]',      antonym:'alacsony (низкий)',     examples:[{hu:'Magas épület.',ru:'Высокое здание.'},{hu:'Magas férfi.',ru:'Высокий мужчина.'}] },
  { topic:'adj', hu:'alacsony',   ru:'низкий',           transcription:'[олочонь]',    antonym:'magas (высокий)',       examples:[{hu:'Alacsony ár.',ru:'Низкая цена.'},{hu:'Alacsony asztal.',ru:'Низкий стол.'}] },
  { topic:'adj', hu:'széles',     ru:'широкий',          transcription:'[сэлэш]',      antonym:'keskeny (узкий)',       examples:[{hu:'Széles utca.',ru:'Широкая улица.'},{hu:'Széles folyó.',ru:'Широкая река.'}] },
  { topic:'adj', hu:'keskeny',    ru:'узкий',            transcription:'[кэшкэнь]',    antonym:'széles (широкий)',      examples:[{hu:'Keskeny ajtó.',ru:'Узкая дверь.'},{hu:'Keskeny út.',ru:'Узкая дорога.'}] },
  { topic:'adj', hu:'vastag',     ru:'толстый',          transcription:'[воштог]',     antonym:'vékony (тонкий)',       examples:[{hu:'Vastag könyv.',ru:'Толстая книга.'},{hu:'Vastag fal.',ru:'Толстая стена.'}] },
  { topic:'adj', hu:'vékony',     ru:'тонкий',           transcription:'[вэконь]',     antonym:'vastag (толстый)',      examples:[{hu:'Vékony papír.',ru:'Тонкая бумага.'},{hu:'Vékony szelet.',ru:'Тонкий ломтик.'}] },
  // КАЧЕСТВО
  { topic:'adj', hu:'jó',         ru:'хороший',          transcription:'[йо]',         antonym:'rossz (плохой)',        examples:[{hu:'Jó ember.',ru:'Хороший человек.'},{hu:'Ez jó ötlet.',ru:'Это хорошая идея.'}] },
  { topic:'adj', hu:'rossz',      ru:'плохой',           transcription:'[росс]',       antonym:'jó (хороший)',          examples:[{hu:'Rossz idő.',ru:'Плохая погода.'},{hu:'Rossz hír.',ru:'Плохая новость.'}] },
  { topic:'adj', hu:'szép',       ru:'красивый',         transcription:'[сэп]',        antonym:'csúnya (некрасивый)',   examples:[{hu:'Szép kilátás.',ru:'Красивый вид.'},{hu:'Szép lány.',ru:'Красивая девушка.'}] },
  { topic:'adj', hu:'csúnya',     ru:'некрасивый',       transcription:'[чунья]',      antonym:'szép (красивый)',       examples:[{hu:'Csúnya idő.',ru:'Некрасивая погода.'},{hu:'Csúnya épület.',ru:'Некрасивое здание.'}] },
  { topic:'adj', hu:'új',         ru:'новый',            transcription:'[уй]',         antonym:'régi (старый)',         examples:[{hu:'Új autó.',ru:'Новая машина.'},{hu:'Új barát.',ru:'Новый друг.'}] },
  { topic:'adj', hu:'régi',       ru:'старый',           transcription:'[рэги]',       antonym:'új (новый)',            examples:[{hu:'Régi ház.',ru:'Старый дом.'},{hu:'Régi barát.',ru:'Старый друг.'}] },
  { topic:'adj', hu:'drága',      ru:'дорогой',          transcription:'[драго]',      antonym:'olcsó (дешёвый)',       examples:[{hu:'Drága autó.',ru:'Дорогая машина.'},{hu:'Ez nagyon drága.',ru:'Это очень дорого.'}] },
  { topic:'adj', hu:'olcsó',      ru:'дешёвый',          transcription:'[олчо]',       antonym:'drága (дорогой)',       examples:[{hu:'Olcsó étel.',ru:'Дешёвая еда.'},{hu:'Olcsó hotel.',ru:'Дешёвый отель.'}] },
  { topic:'adj', hu:'könnyű',     ru:'лёгкий',           transcription:'[кёньню]',     antonym:'nehéz (тяжёлый)',       examples:[{hu:'Könnyű táska.',ru:'Лёгкая сумка.'},{hu:'Könnyű feladat.',ru:'Лёгкое задание.'}] },
  { topic:'adj', hu:'nehéz',      ru:'тяжёлый / трудный',transcription:'[нэхэз]',      antonym:'könnyű (лёгкий)',       examples:[{hu:'Nehéz kérdés.',ru:'Трудный вопрос.'},{hu:'Nehéz bőrönd.',ru:'Тяжёлый чемодан.'}] },
  { topic:'adj', hu:'gyors',      ru:'быстрый',          transcription:'[дьорш]',      antonym:'lassú (медленный)',     examples:[{hu:'Gyors autó.',ru:'Быстрая машина.'},{hu:'Gyors válasz.',ru:'Быстрый ответ.'}] },
  { topic:'adj', hu:'lassú',      ru:'медленный',        transcription:'[лошшу]',      antonym:'gyors (быстрый)',       examples:[{hu:'Lassú internet.',ru:'Медленный интернет.'},{hu:'Lassú mozgás.',ru:'Медленное движение.'}] },
  { topic:'adj', hu:'erős',       ru:'сильный',          transcription:'[эрёш]',       antonym:'gyenge (слабый)',       examples:[{hu:'Erős kávé.',ru:'Крепкий кофе.'},{hu:'Erős szél.',ru:'Сильный ветер.'}] },
  { topic:'adj', hu:'gyenge',     ru:'слабый',           transcription:'[дьэнгэ]',     antonym:'erős (сильный)',        examples:[{hu:'Gyenge jelszó.',ru:'Слабый пароль.'},{hu:'Gyenge hang.',ru:'Слабый голос.'}] },
  { topic:'adj', hu:'fontos',     ru:'важный',           transcription:'[фонтош]',     antonym:'— ',                   examples:[{hu:'Fontos kérdés.',ru:'Важный вопрос.'},{hu:'Ez nagyon fontos.',ru:'Это очень важно.'}] },
  { topic:'adj', hu:'érdekes',    ru:'интересный',       transcription:'[эрдэкэш]',    antonym:'— ',                   examples:[{hu:'Érdekes film.',ru:'Интересный фильм.'},{hu:'Érdekes könyv.',ru:'Интересная книга.'}] },
  // ТЕМПЕРАТУРА И СОСТОЯНИЕ
  { topic:'adj', hu:'meleg',      ru:'тёплый / горячий', transcription:'[мэлэг]',      antonym:'hideg (холодный)',      examples:[{hu:'Meleg idő.',ru:'Тёплая погода.'},{hu:'Meleg tea.',ru:'Горячий чай.'}] },
  { topic:'adj', hu:'hideg',      ru:'холодный',         transcription:'[хидэг]',      antonym:'meleg (тёплый)',        examples:[{hu:'Hideg víz.',ru:'Холодная вода.'},{hu:'Hideg tél.',ru:'Холодная зима.'}] },
  { topic:'adj', hu:'forró',      ru:'горячий',          transcription:'[форро]',      antonym:'hideg (холодный)',      examples:[{hu:'Forró kávé.',ru:'Горячий кофе.'},{hu:'Forró nyár.',ru:'Жаркое лето.'}] },
  { topic:'adj', hu:'friss',      ru:'свежий',           transcription:'[фришш]',      antonym:'— ',                   examples:[{hu:'Friss kenyér.',ru:'Свежий хлеб.'},{hu:'Friss levegő.',ru:'Свежий воздух.'}] },
  { topic:'adj', hu:'tiszta',     ru:'чистый',           transcription:'[тисто]',      antonym:'piszkos (грязный)',     examples:[{hu:'Tiszta szoba.',ru:'Чистая комната.'},{hu:'Tiszta víz.',ru:'Чистая вода.'}] },
  { topic:'adj', hu:'piszkos',    ru:'грязный',          transcription:'[пискош]',     antonym:'tiszta (чистый)',       examples:[{hu:'Piszkos ruha.',ru:'Грязная одежда.'},{hu:'Piszkos kéz.',ru:'Грязные руки.'}] },
  { topic:'adj', hu:'száraz',     ru:'сухой',            transcription:'[сарос]',      antonym:'nedves (мокрый)',       examples:[{hu:'Száraz idő.',ru:'Сухая погода.'},{hu:'Száraz bőr.',ru:'Сухая кожа.'}] },
  { topic:'adj', hu:'nedves',     ru:'мокрый',           transcription:'[нэдвэш]',     antonym:'száraz (сухой)',        examples:[{hu:'Nedves ruha.',ru:'Мокрая одежда.'},{hu:'Nedves út.',ru:'Мокрая дорога.'}] },
  { topic:'adj', hu:'nyitva',     ru:'открыто',          transcription:'[ньитво]',     antonym:'zárva (закрыто)',       examples:[{hu:'A bolt nyitva van.',ru:'Магазин открыт.'},{hu:'Az ajtó nyitva.',ru:'Дверь открыта.'}] },
  { topic:'adj', hu:'zárva',      ru:'закрыто',          transcription:'[зарво]',      antonym:'nyitva (открыто)',      examples:[{hu:'A bolt zárva van.',ru:'Магазин закрыт.'},{hu:'Zárva tartják.',ru:'Держат закрытым.'}] },
  // ЧУВСТВА И ХАРАКТЕР
  { topic:'adj', hu:'boldog',     ru:'счастливый',       transcription:'[болдог]',     antonym:'szomorú (грустный)',   examples:[{hu:'Boldog vagyok.',ru:'Я счастлив.'},{hu:'Boldog születésnapot!',ru:'С днём рождения!'}] },
  { topic:'adj', hu:'szomorú',    ru:'грустный',         transcription:'[сомору]',     antonym:'boldog (счастливый)',  examples:[{hu:'Szomorú vagyok.',ru:'Мне грустно.'},{hu:'Szomorú film.',ru:'Грустный фильм.'}] },
  { topic:'adj', hu:'fáradt',     ru:'усталый',          transcription:'[фарот]',      antonym:'— ',                   examples:[{hu:'Fáradt vagyok.',ru:'Я устал.'},{hu:'Fáradt arc.',ru:'Усталое лицо.'}] },
  { topic:'adj', hu:'beteg',      ru:'больной',          transcription:'[бэтэг]',      antonym:'egészséges (здоровый)',examples:[{hu:'Beteg vagyok.',ru:'Я болен.'},{hu:'Beteg gyerek.',ru:'Больной ребёнок.'}] },
  { topic:'adj', hu:'egészséges', ru:'здоровый',         transcription:'[эгэсшэгэш]',  antonym:'beteg (больной)',       examples:[{hu:'Egészséges vagyok.',ru:'Я здоров.'},{hu:'Egészséges étel.',ru:'Здоровая еда.'}] },
  { topic:'adj', hu:'hangos',     ru:'громкий',          transcription:'[хонгош]',     antonym:'csendes (тихий)',       examples:[{hu:'Hangos zene.',ru:'Громкая музыка.'},{hu:'Hangos szomszéd.',ru:'Громкий сосед.'}] },
  { topic:'adj', hu:'csendes',    ru:'тихий',            transcription:'[чэндэш]',     antonym:'hangos (громкий)',      examples:[{hu:'Csendes utca.',ru:'Тихая улица.'},{hu:'Csendes hely.',ru:'Тихое место.'}] },
  { topic:'adj', hu:'kedves',     ru:'добрый / милый',   transcription:'[кэдвэш]',     antonym:'— ',                   examples:[{hu:'Kedves ember.',ru:'Добрый человек.'},{hu:'Nagyon kedves!',ru:'Очень мило!'}] },
  { topic:'adj', hu:'udvarias',   ru:'вежливый',         transcription:'[удвориош]',   antonym:'— ',                   examples:[{hu:'Udvarias válasz.',ru:'Вежливый ответ.'},{hu:'Legyen szíves!',ru:'Будьте любезны!'}] },
  { topic:'adj', hu:'barátságos', ru:'дружелюбный',      transcription:'[борачшагош]', antonym:'— ',                   examples:[{hu:'Barátságos város.',ru:'Дружелюбный город.'},{hu:'Barátságos kutya.',ru:'Дружелюбная собака.'}] },
  // ЦВЕТА И ВНЕШНИЙ ВИД
  { topic:'adj', hu:'piros',      ru:'красный',          transcription:'[пирош]',      antonym:'— ',                   examples:[{hu:'Piros alma.',ru:'Красное яблоко.'},{hu:'Piros autó.',ru:'Красная машина.'}] },
  { topic:'adj', hu:'kék',        ru:'синий',            transcription:'[кэк]',        antonym:'— ',                   examples:[{hu:'Kék ég.',ru:'Синее небо.'},{hu:'Kék szem.',ru:'Синие глаза.'}] },
  { topic:'adj', hu:'zöld',       ru:'зелёный',          transcription:'[зёльд]',      antonym:'— ',                   examples:[{hu:'Zöld fű.',ru:'Зелёная трава.'},{hu:'Zöld szín.',ru:'Зелёный цвет.'}] },
  { topic:'adj', hu:'fehér',      ru:'белый',            transcription:'[фэхэр]',      antonym:'fekete (чёрный)',       examples:[{hu:'Fehér hó.',ru:'Белый снег.'},{hu:'Fehér ing.',ru:'Белая рубашка.'}] },
  { topic:'adj', hu:'fekete',     ru:'чёрный',           transcription:'[фэкэтэ]',     antonym:'fehér (белый)',         examples:[{hu:'Fekete kávé.',ru:'Чёрный кофе.'},{hu:'Fekete macska.',ru:'Чёрная кошка.'}] },
  { topic:'adj', hu:'sárga',      ru:'жёлтый',           transcription:'[шарго]',      antonym:'— ',                   examples:[{hu:'Sárga citrom.',ru:'Жёлтый лимон.'},{hu:'Sárga lap.',ru:'Жёлтый лист.'}] },
  { topic:'adj', hu:'barna',      ru:'коричневый',       transcription:'[борно]',      antonym:'— ',                   examples:[{hu:'Barna szemek.',ru:'Карие глаза.'},{hu:'Barna kenyér.',ru:'Чёрный хлеб.'}] },
  { topic:'adj', hu:'szürke',     ru:'серый',            transcription:'[сюркэ]',      antonym:'— ',                   examples:[{hu:'Szürke ég.',ru:'Серое небо.'},{hu:'Szürke macska.',ru:'Серая кошка.'}] },
  { topic:'adj', hu:'világos',    ru:'светлый',          transcription:'[виlagош]',    antonym:'sötét (тёмный)',        examples:[{hu:'Világos szoba.',ru:'Светлая комната.'},{hu:'Világos szín.',ru:'Светлый цвет.'}] },
  { topic:'adj', hu:'sötét',      ru:'тёмный',           transcription:'[шётэт]',      antonym:'világos (светлый)',     examples:[{hu:'Sötét éjszaka.',ru:'Тёмная ночь.'},{hu:'Sötét szín.',ru:'Тёмный цвет.'}] },
];

/* ── Render nouns ── */
const nounsList = document.getElementById('nouns-list');
let activeNounTopic = 'all';

function renderNouns() {
  const list = activeNounTopic === 'adj'
    ? adjectives
    : activeNounTopic === 'all'
      ? nouns
      : nouns.filter(n => n.topic === activeNounTopic);
  nounsList.innerHTML = '';
  if (!list.length) {
    nounsList.innerHTML = '<p class="no-results">Ничего не найдено</p>';
    return;
  }
  list.forEach(noun => {
    const card = document.createElement('div');
    card.className = 'verb-card';
    card.innerHTML = `
      <div class="verb-card-left">
        <span class="verb-hu">${noun.hu}</span>
        <span class="verb-ru">${noun.ru}</span>
      </div>
      <span class="verb-arrow">›</span>
    `;
    card.addEventListener('click', () => openModal(noun));
    nounsList.appendChild(card);
  });
}

renderNouns();

document.getElementById('noun-filter-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  activeNounTopic = tab.dataset.topic;
  document.querySelectorAll('#noun-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderNouns();
});

/* ── Modal ── */
const overlay   = document.getElementById('modal-overlay');
const modal     = document.getElementById('modal');
let currentVerb = null;

function getSavedVerbs() {
  try { return JSON.parse(localStorage.getItem('savedVerbs') || '[]'); }
  catch { return []; }
}

function openModal(verb) {
  currentVerb = verb;

  document.getElementById('modal-word').textContent          = verb.hu;
  document.getElementById('modal-transcription').textContent = verb.transcription;
  document.getElementById('modal-translation').textContent   = verb.ru;

  const antonymEl = document.getElementById('modal-antonym');
  if (verb.antonym && verb.antonym.trim() && verb.antonym.trim() !== '—' && verb.antonym.trim() !== '— ') {
    antonymEl.innerHTML = `Антоним: <span>${verb.antonym}</span>`;
    antonymEl.style.display = 'block';
  } else {
    antonymEl.style.display = 'none';
  }

  const examplesEl = document.getElementById('modal-examples');
  examplesEl.innerHTML = verb.examples.map(ex => `
    <div class="example-item">
      <div class="example-hu">${ex.hu}</div>
      <div class="example-ru">${ex.ru}</div>
    </div>
  `).join('');

  updateSaveBtn(verb);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  currentVerb = null;
}

function updateSaveBtn(verb) {
  const saved  = getSavedVerbs();
  const isSaved = saved.some(v => v.hu === verb.hu);
  const btn    = document.getElementById('modal-save-btn');
  const label  = document.getElementById('modal-save-label');
  btn.classList.toggle('saved', isSaved);
  label.textContent = isSaved ? 'В СЛОВАРЕ ✓' : 'СОХРАНИТЬ В СЛОВАРЬ';
}

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

/* ── Listen (Web Speech API) ── */
document.getElementById('modal-listen-btn').addEventListener('click', () => {
  if (!currentVerb || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(currentVerb.hu);
  utt.lang = 'hu-HU';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
});

/* ── Save to dictionary ── */
document.getElementById('modal-save-btn').addEventListener('click', () => {
  if (!currentVerb) return;
  const saved   = getSavedVerbs();
  const idx     = saved.findIndex(v => v.hu === currentVerb.hu);
  if (idx === -1) {
    saved.push({ ...currentVerb, savedAt: new Date().toISOString() });
  } else {
    saved.splice(idx, 1);
  }
  localStorage.setItem('savedVerbs', JSON.stringify(saved));
  updateSaveBtn(currentVerb);
  renderDictionary();
});
/* ── Assistant screen ── */
(function () {
  const micBtn      = document.getElementById('asst-mic-btn');
  const micStatus   = document.getElementById('asst-mic-status');
  const inputEl     = document.getElementById('asst-input');
  const sendBtn     = document.getElementById('asst-send-btn');
  const loadingEl   = document.getElementById('asst-loading');
  const resultEl    = document.getElementById('asst-result');
  const resultWord  = document.getElementById('asst-result-word');
  const resultBody  = document.getElementById('asst-result-content');
  const resultActs  = document.getElementById('asst-result-actions');
  const listenBtn   = document.getElementById('asst-listen-result-btn');
  const saveBtn     = document.getElementById('asst-save-result-btn');
  const saveLbl     = document.getElementById('asst-save-label');
  const apiInput    = document.getElementById('asst-api-input');
  const settingsTgl = document.getElementById('asst-settings-toggle');
  const settingsBody= document.getElementById('asst-settings-body');
  const settingsArrow=document.getElementById('asst-settings-arrow');

  const GEMINI_KEY  = 'geminiApiKey';
  apiInput.value    = localStorage.getItem(GEMINI_KEY) || '';
  apiInput.addEventListener('change', () =>
    localStorage.setItem(GEMINI_KEY, apiInput.value.trim())
  );
  apiInput.addEventListener('input', () =>
    localStorage.setItem(GEMINI_KEY, apiInput.value.trim())
  );

  settingsTgl.addEventListener('click', () => {
    settingsBody.classList.toggle('open');
    settingsArrow.classList.toggle('open');
  });

  /* ── Mic ── */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null, isRecording = false;
  let currentWord  = '';
  let lastResult   = null;

  if (SR) {
    recognition = new SR();
    recognition.lang            = 'hu-HU';
    recognition.continuous      = false;
    recognition.interimResults  = false;
    recognition.onresult = e => {
      const text = e.results[0][0].transcript.trim();
      inputEl.value = text;
      stopRec();
      query(text);
    };
    recognition.onerror = () => stopRec();
    recognition.onend   = () => stopRec();
  } else {
    micStatus.textContent = 'Микрофон недоступен в этом браузере';
  }

  function startRec() {
    if (!recognition) return;
    isRecording = true;
    micBtn.classList.add('recording');
    micStatus.textContent = 'Говорите по-венгерски…';
    micStatus.classList.add('active');
    try { recognition.start(); } catch (_) { stopRec(); }
  }

  function stopRec() {
    isRecording = false;
    micBtn.classList.remove('recording');
    micStatus.textContent = SR ? 'Нажмите чтобы говорить' : 'Микрофон недоступен';
    micStatus.classList.remove('active');
  }

  micBtn.addEventListener('click', () => {
    if (!recognition) { return; }
    isRecording ? recognition.stop() : startRec();
  });

  /* ── Send ── */
  sendBtn.addEventListener('click', () => {
    const t = inputEl.value.trim();
    if (t) query(t);
  });

  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const t = inputEl.value.trim(); if (t) query(t); }
  });

  /* ── Gemini ── */
  async function query(text) {
    const key = apiInput.value.trim() || localStorage.getItem(GEMINI_KEY) || '';
    currentWord = text;
    resultEl.style.display = 'none';
    lastResult = null;

    console.log('[Gemini] query() called, text:', text);
    console.log('[Gemini] key present:', !!key, '| length:', key.length);

    if (!key) {
      console.warn('[Gemini] No API key — aborting');
      showInfo(
        text,
        '<span style="color:#aaa">Введите API ключ в настройках.<br>' +
        'Бесплатный ключ: <a href="https://aistudio.google.com" target="_blank" ' +
        'rel="noopener" style="color:var(--orange)">aistudio.google.com</a></span>',
        false
      );
      settingsBody.classList.add('open');
      settingsArrow.classList.add('open');
      return;
    }

    loadingEl.style.display = 'flex';

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    console.log('[Gemini] endpoint:', endpoint.replace(key, key.substring(0,6) + '…'));

    const prompt =
      `Пользователь написал или произнёс венгерское слово или фразу: "${text}"\n` +
      `Ответь строго в этом формате (без лишних слов):\n` +
      `1. Перевод: [перевод на русский]\n` +
      `2. Транскрипция: [произношение русскими буквами]\n` +
      `3. Пример: [пример на венгерском] — [перевод примера]`;

    try {
      console.log('[Gemini] sending POST…');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      console.log('[Gemini] response status:', res.status);
      if (!res.ok) {
        const status = res.status;
        console.error('[Gemini] HTTP error:', status);
        if (status === 429) throw new Error('429');
        if (status === 400 || status === 403) throw new Error('400');
        throw new Error(`HTTP ${status}`);
      }
      const data = await res.json();
      const raw  = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      console.log('[Gemini] raw response length:', raw.length);
      renderResult(text, raw);
    } catch (err) {
      console.error('[Gemini] catch:', err.message);
      const msg =
        err.message === '429' ? 'Превышен лимит запросов, подождите минуту' :
        err.message === '400' ? 'Неверный API ключ' :
        `Ошибка: ${err.message}`;
      showInfo(text, `<span style="color:#c83232">${msg}</span>`, false);
    } finally {
      loadingEl.style.display = 'none';
    }
  }

  function parseRaw(raw) {
    let translation = '', transcription = '', example = '';
    raw.split('\n').forEach(line => {
      const l = line.trim();
      const m1 = l.match(/^1\.\s*Перевод\s*:\s*(.+)/i);
      const m2 = l.match(/^2\.\s*Транскрипция\s*:\s*(.+)/i);
      const m3 = l.match(/^3\.\s*Пример\s*:\s*(.+)/i);
      if (m1) translation   = m1[1].trim();
      if (m2) transcription = m2[1].trim();
      if (m3) example       = m3[1].trim();
    });
    return { translation: translation || raw.trim(), transcription, example };
  }

  function renderResult(word, raw) {
    const { translation, transcription, example } = parseRaw(raw);
    lastResult = { word, translation, transcription, example };

    resultWord.textContent = word;
    resultBody.innerHTML   = '';

    [
      { label: 'Перевод',      value: translation },
      { label: 'Транскрипция', value: transcription },
      { label: 'Пример',       value: example },
    ].filter(r => r.value).forEach(({ label, value }) => {
      const row = document.createElement('div');
      row.className = 'asst-result-row';
      row.innerHTML =
        `<span class="asst-result-label">${label}</span>` +
        `<span class="asst-result-value">${value}</span>`;
      resultBody.appendChild(row);
    });

    saveLbl.textContent = 'СОХРАНИТЬ';
    saveBtn.classList.remove('saved');
    resultActs.style.display = 'flex';
    resultEl.style.display   = 'block';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showInfo(word, html, showActions) {
    resultWord.textContent     = word;
    resultBody.innerHTML       = `<div class="asst-result-row"><span class="asst-result-value">${html}</span></div>`;
    resultActs.style.display   = showActions ? 'flex' : 'none';
    resultEl.style.display     = 'block';
  }

  /* ── Listen ── */
  listenBtn.addEventListener('click', () => {
    if (!currentWord || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(currentWord);
    u.lang = 'hu-HU'; u.rate = 0.85;
    window.speechSynthesis.speak(u);
  });

  /* ── Save ── */
  saveBtn.addEventListener('click', () => {
    if (!lastResult) return;
    const saved = getSavedVerbs();
    const exists = saved.some(v => v.hu === lastResult.word);
    if (!exists) {
      const parts = lastResult.example.split('—');
      saved.push({
        hu: lastResult.word,
        ru: lastResult.translation,
        transcription: lastResult.transcription ? `[${lastResult.transcription}]` : '',
        examples: lastResult.example
          ? [{ hu: (parts[0] || lastResult.example).trim(),
               ru: (parts[1] || '').trim() }]
          : [],
        savedAt: new Date().toISOString(),
      });
      localStorage.setItem('savedVerbs', JSON.stringify(saved));
      renderDictionary();
    }
    saveBtn.classList.add('saved');
    saveLbl.textContent = 'СОХРАНЕНО ✓';
  });

  /* ── Camera + OCR ── */
  const camBtn      = document.getElementById('asst-cam-btn');
  const camInput    = document.getElementById('asst-cam-input');
  const imgPreview  = document.getElementById('asst-img-preview');
  const previewImg  = document.getElementById('asst-preview-img');
  const ocrBar      = document.getElementById('asst-ocr-bar');
  const ocrText     = document.getElementById('asst-ocr-text');

  camBtn.addEventListener('click', () => camInput.click());

  camInput.addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    camInput.value = '';

    // Show preview
    const url = URL.createObjectURL(file);
    previewImg.src = url;
    imgPreview.style.display = 'block';
    ocrBar.style.display     = 'flex';
    ocrText.textContent      = 'Читаю текст...';

    // Scroll to preview
    imgPreview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Reset result area
    resultEl.style.display  = 'none';
    loadingEl.style.display = 'none';

    try {
      if (typeof Tesseract === 'undefined') throw new Error('Tesseract не загружен');

      const result = await Tesseract.recognize(file, 'hun+rus+eng', {
        logger: m => {
          if (m.status === 'recognizing text') {
            ocrText.textContent = `Читаю текст... ${Math.round(m.progress * 100)}%`;
          }
        }
      });

      const text = result.data.text.trim();
      ocrBar.style.display = 'none';

      if (!text) {
        ocrText.textContent    = 'Текст не найден на фото';
        ocrBar.style.display   = 'flex';
        ocrBar.querySelector('.asst-ocr-spinner').style.display = 'none';
        return;
      }

      // Send to Gemini with camera prompt
      await queryCameraText(text);

    } catch (err) {
      ocrText.textContent  = `Ошибка: ${err.message}`;
      ocrBar.style.display = 'flex';
    }
  });

  async function queryCameraText(rawText) {
    const key = document.getElementById('asst-api-input').value.trim()
      || localStorage.getItem('geminiApiKey') || '';

    console.log('[Gemini/camera] queryCameraText() called');
    console.log('[Gemini/camera] key present:', !!key, '| length:', key.length);

    if (!key) {
      console.warn('[Gemini/camera] No API key — aborting');
      showCameraResult(rawText, null);
      document.getElementById('asst-settings-body').classList.add('open');
      document.getElementById('asst-settings-arrow').classList.add('open');
      return;
    }

    currentWord = rawText.split(/\n|\s/).filter(Boolean)[0]?.substring(0, 40) || '';
    loadingEl.style.display = 'flex';

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    console.log('[Gemini/camera] endpoint:', endpoint.replace(key, key.substring(0,6) + '…'));

    const prompt =
      `Это текст с фотографии на венгерском языке: "${rawText}".\n` +
      `Переведи на русский язык. Если есть отдельные слова — дай перевод каждого. ` +
      `Объясни контекст если нужно.`;

    try {
      console.log('[Gemini/camera] sending POST…');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      console.log('[Gemini/camera] response status:', res.status);
      if (!res.ok) {
        const status = res.status;
        console.error('[Gemini/camera] HTTP error:', status);
        if (status === 429) throw new Error('429');
        if (status === 400 || status === 403) throw new Error('400');
        throw new Error(`HTTP ${status}`);
      }
      const data     = await res.json();
      const response = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      console.log('[Gemini/camera] raw response length:', response.length);
      showCameraResult(rawText, response);
    } catch (err) {
      console.error('[Gemini/camera] catch:', err.message);
      const msg =
        err.message === '429' ? 'Превышен лимит запросов, подождите минуту' :
        err.message === '400' ? 'Неверный API ключ' :
        err.message;
      showCameraResult(rawText, null, msg);
    } finally {
      loadingEl.style.display = 'none';
    }
  }

  function showCameraResult(original, translation, errorMsg) {
    lastResult = null;
    resultWord.textContent = '📷 С фото';
    resultBody.innerHTML   = '';

    // Original text row
    const origRow  = document.createElement('div');
    origRow.className = 'asst-result-row';
    origRow.innerHTML =
      `<span class="asst-result-label">Оригинал</span>` +
      `<span class="asst-result-value" style="font-style:italic;color:#999;white-space:pre-wrap">${original}</span>`;
    resultBody.appendChild(origRow);

    if (errorMsg) {
      const errRow = document.createElement('div');
      errRow.className = 'asst-result-row';
      errRow.innerHTML =
        `<span class="asst-result-label">Ошибка</span>` +
        `<span class="asst-result-value" style="color:#c83232">${errorMsg}</span>`;
      resultBody.appendChild(errRow);
      resultActs.style.display = 'none';
    } else if (!translation) {
      const infoRow = document.createElement('div');
      infoRow.className = 'asst-result-row';
      infoRow.innerHTML =
        `<span class="asst-result-value" style="color:#aaa">` +
        `Добавьте Gemini API ключ в настройках ниже</span>`;
      resultBody.appendChild(infoRow);
      resultActs.style.display = 'none';
    } else {
      const transRow = document.createElement('div');
      transRow.className = 'asst-result-row';
      transRow.innerHTML =
        `<span class="asst-result-label">Перевод</span>` +
        `<span class="asst-result-value" style="white-space:pre-wrap">${translation}</span>`;
      resultBody.appendChild(transRow);

      // Store for save
      lastResult = { word: original, translation, transcription: '', example: '' };

      // Hide listen btn (no single word for TTS)
      document.getElementById('asst-listen-result-btn').style.display = 'none';
      saveLbl.textContent = 'СОХРАНИТЬ';
      saveBtn.classList.remove('saved');
      resultActs.style.display = 'flex';
    }

    resultEl.style.display = 'block';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Restore listen btn on regular queries
  const origQuery = query; // keep reference to restore listen btn
  document.getElementById('asst-send-btn').addEventListener('click', () => {
    document.getElementById('asst-listen-result-btn').style.display = '';
  }, true);
  document.getElementById('asst-mic-btn').addEventListener('click', () => {
    document.getElementById('asst-listen-result-btn').style.display = '';
  }, true);
})();

/* ── Dictionary screen ── */
function pluralWords(n) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return 'слово';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'слова';
  return 'слов';
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

function renderDictionary() {
  const saved   = getSavedVerbs();
  const listEl  = document.getElementById('dict-list');
  const countEl = document.getElementById('dict-count');
  const footer  = document.getElementById('dict-footer');

  countEl.textContent = saved.length
    ? `${saved.length} ${pluralWords(saved.length)}`
    : '';

  listEl.innerHTML = '';

  if (!saved.length) {
    footer.style.display = 'none';
    listEl.innerHTML = `
      <div class="dict-empty">
        <span class="dict-empty-icon">♡</span>
        <p>Сохраняйте слова нажимая&nbsp;♡ в карточках</p>
      </div>`;
    return;
  }

  footer.style.display = 'block';

  saved.forEach((word, idx) => {
    const item = document.createElement('div');
    item.className = 'dict-item';
    item.innerHTML = `
      <div class="dict-item-info">
        <span class="dict-item-hu">${word.direction === 'ru->hu' ? word.ru : word.hu}</span>
        <span class="dict-item-ru">${word.direction === 'ru->hu' ? word.hu : word.ru}</span>
        <div style="display:flex;align-items:center;gap:6px;margin-top:3px;flex-wrap:wrap">
          ${word.savedAt ? `<span class="dict-item-date">${formatDate(word.savedAt)}</span>` : ''}
          ${word.manual && word.direction === 'ru->hu'
            ? `<span class="dict-dir-badge">🇷🇺 → 🇭🇺</span>`
            : word.manual
              ? `<span class="dict-dir-badge">🇭🇺 → 🇷🇺</span>`
              : ''}
        </div>
      </div>
      <div class="dict-item-actions">
        <button class="dict-action-btn dict-listen-btn" data-word="${word.hu}" aria-label="Послушать">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="var(--orange)" stroke-width="2" stroke-linecap="round"/>
            <line x1="12" y1="19" x2="12" y2="23" stroke="var(--orange)" stroke-width="2" stroke-linecap="round"/>
            <line x1="8"  y1="23" x2="16" y2="23" stroke="var(--orange)" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="dict-action-btn dict-delete-btn" data-idx="${idx}" aria-label="Удалить">
          <svg viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14H6L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>`;
    listEl.appendChild(item);
  });
}

document.getElementById('dict-list').addEventListener('click', e => {
  const listenBtn = e.target.closest('.dict-listen-btn');
  const deleteBtn = e.target.closest('.dict-delete-btn');

  if (listenBtn && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(listenBtn.dataset.word);
    utt.lang = 'hu-HU';
    utt.rate = 0.85;
    window.speechSynthesis.speak(utt);
  }

  if (deleteBtn) {
    const saved = getSavedVerbs();
    saved.splice(parseInt(deleteBtn.dataset.idx, 10), 1);
    localStorage.setItem('savedVerbs', JSON.stringify(saved));
    renderDictionary();
  }
});

/* ── Add word form ── */
(function () {
  const overlay   = document.getElementById('dict-form-overlay');
  const field1    = document.getElementById('dict-form-field1');
  const field2    = document.getElementById('dict-form-field2');
  const label1    = document.getElementById('dict-form-label1');
  const label2    = document.getElementById('dict-form-label2');
  const saveBtn   = document.getElementById('dict-form-save');
  const cancelBtn = document.getElementById('dict-form-cancel');
  const btnHu2Ru  = document.getElementById('dict-dir-hu2ru');
  const btnRu2Hu  = document.getElementById('dict-dir-ru2hu');

  // Direction: 'hu->ru' | 'ru->hu'
  let dir = 'hu->ru';

  const config = {
    'hu->ru': {
      label1: 'Венгерское слово',
      placeholder1: 'например: köszönöm',
      label2: 'Перевод на русский',
      placeholder2: 'например: спасибо',
    },
    'ru->hu': {
      label1: 'Русское слово',
      placeholder1: 'например: спасибо',
      label2: 'Перевод на венгерский',
      placeholder2: 'например: köszönöm',
    },
  };

  function applyDirection(d) {
    dir = d;
    const c = config[d];
    label1.textContent       = c.label1;
    field1.placeholder       = c.placeholder1;
    label2.textContent       = c.label2;
    field2.placeholder       = c.placeholder2;
    btnHu2Ru.classList.toggle('active', d === 'hu->ru');
    btnRu2Hu.classList.toggle('active', d === 'ru->hu');
    field1.value = '';
    field2.value = '';
    saveBtn.disabled = true;
    field1.focus();
  }

  btnHu2Ru.addEventListener('click', () => applyDirection('hu->ru'));
  btnRu2Hu.addEventListener('click', () => applyDirection('ru->hu'));

  function openForm() {
    applyDirection('hu->ru');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => field1.focus(), 320);
  }

  function closeForm() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function checkInputs() {
    saveBtn.disabled = !(field1.value.trim() && field2.value.trim());
  }

  document.getElementById('dict-add-btn').addEventListener('click', openForm);
  cancelBtn.addEventListener('click', closeForm);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeForm(); });
  field1.addEventListener('input', checkInputs);
  field2.addEventListener('input', checkInputs);

  field1.addEventListener('keydown', e => {
    if (e.key === 'Enter' && field1.value.trim()) field2.focus();
  });
  field2.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !saveBtn.disabled) saveBtn.click();
  });

  saveBtn.addEventListener('click', () => {
    const v1 = field1.value.trim();
    const v2 = field2.value.trim();
    if (!v1 || !v2) return;

    // Always store hu = Hungarian word, ru = Russian word
    const hu = dir === 'hu->ru' ? v1 : v2;
    const ru = dir === 'hu->ru' ? v2 : v1;

    const saved = getSavedVerbs();
    saved.unshift({
      hu,
      ru,
      transcription: '',
      examples: [],
      savedAt: new Date().toISOString(),
      manual: true,
      direction: dir,
    });
    localStorage.setItem('savedVerbs', JSON.stringify(saved));
    renderDictionary();
    renderHome();
    closeForm();
  });
})();

document.getElementById('dict-clear-btn').addEventListener('click', () => {
  if (confirm('Удалить все сохранённые слова?')) {
    localStorage.removeItem('savedVerbs');
    renderDictionary();
  }
});

navBtns.forEach(btn => {
  if (btn.dataset.target === 'screen-dictionary') {
    btn.addEventListener('click', renderDictionary);
  }
});

renderDictionary();

/* ── Home screen ── */
let _wodWord = '';

function renderHome() {
  const allWords = [...verbs, ...nouns];
  const dayIdx   = Math.floor(Date.now() / 86400000) % allWords.length;
  const wod      = allWords[dayIdx];
  _wodWord = wod.hu;

  document.getElementById('wod-hu').textContent            = wod.hu;
  document.getElementById('wod-transcription').textContent = wod.transcription || '';
  document.getElementById('wod-ru').textContent            = wod.ru;

  // Noun count
  document.getElementById('home-nouns-count').textContent  = `${nouns.length + adjectives.length} слов`;

  // Dictionary counter
  const saved  = getSavedVerbs();
  const count  = saved.length;
  const dictSub  = document.getElementById('home-dict-sub');
  const dictInfo = document.getElementById('home-dict-info');
  if (count > 0) {
    dictSub.textContent  = `${count} ${pluralWords(count)}`;
    dictInfo.textContent = `В словаре ${count} ${pluralWords(count)}`;
  } else {
    dictSub.textContent  = 'сохранённые слова';
    dictInfo.textContent = '';
  }
}

document.getElementById('wod-listen-btn').addEventListener('click', () => {
  if (!_wodWord || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(_wodWord);
  u.lang = 'hu-HU'; u.rate = 0.85;
  window.speechSynthesis.speak(u);
});

// Home quick-access cards → navigate like bottom nav
document.querySelectorAll('.home-card').forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.dataset.target;
    screens.forEach(s => s.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    navBtns.forEach(b => {
      if (b.dataset.target === targetId) b.classList.add('active');
    });
    if (targetId === 'screen-dictionary') renderDictionary();
  });
});

// Refresh home when bottom-nav home tab is tapped
navBtns.forEach(btn => {
  if (btn.dataset.target === 'screen-home') {
    btn.addEventListener('click', renderHome);
  }
});

renderHome();
