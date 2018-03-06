## Структура

 -  **android** и **ios** - дефолтные папки, в них собирается проект для соответствующей платформы, весь что там есть, генерируется автоматически
 - **app** тут лежит код проекта
 -  **pages/index.js** - entree для nextjs
 - **server**  - серверная часть чата
 -  **static** - статика для nextjs (готовые стили для декстопа пока лежат там)
 - **index.js** - entree для react native

## Запускаем проект
Подключаем девайс, собираем проект

    react-native run-ios

или

    react-native run-android

   В другом терминале запускаем cli для  react native

    npm start

В другом терминале запускаем сервер чата

     node server/app.js

И еще в одном териминале запускаем nextjs

    npm run dev

Чтобы запросы телефона к локалхосту перенаправлялись на usb делаем так (не знаю работает на маках или нет)

    adb reverse tcp:8080 tcp:8080

Либо можно поменять локалхост на ip компьютера в **app/components/App/App.native.js**