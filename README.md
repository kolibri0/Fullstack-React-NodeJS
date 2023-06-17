# Test Fullstack React/NodeJS

### description:

есть следующий JSON

[{
  email: 'jim@gmail.com',
  number: '221122'
}, {
  email: 'jam@gmail.com',
  number: '830347'
}, {
  email: 'john@gmail.com',
  number: '221122'
}, {
  email: 'jams@gmail.com',
  number: '349425'
}, {
  email: 'jams@gmail.com',
  number: '141424'
}, {
  email: 'jill@gmail.com',
  number: '822287'
}, {
  email: 'jill@gmail.com',
  number: '822286'
}]

Напишите приложение с одной страницей на котором находится форма с двумя полями
email (обязательное) и number (опциональное)
и кнопка submit

при нажатии на submit запрос уходит на бек где нужно в JSON найти подходящих под поисковый запрос пользователей
показать результат поиска, либо ошибки валидации на фронте

условия
- нужно на беке добавить задержку обработки запроса в 5 секунд (имитация долгой обработки ответа). При повторном запросе с фронта, отменять прошлый запрос.
- обязательная валидация полей email и number. Можно сделать либо на фронте либо на беке, будьте готовы объяснить выбранный подход
- на фронте на поле number нужно добавить маску, чтобы номер отображался с дефисами каждые два знака. например 22-11-22, 83-03-47

тех. требования:
- фронт react или vue
- бек nodejs

## Result:

![345](https://github.com/kolibri0/Fullstack-React-NodeJS/assets/99971966/cc8b4949-0d15-4df9-81f4-f0ea8b609a0a)
![dfgiudfg](https://github.com/kolibri0/Fullstack-React-NodeJS/assets/99971966/d5580410-5142-4066-8be0-b806086ef419)
![dsfgd](https://github.com/kolibri0/Fullstack-React-NodeJS/assets/99971966/a3cd6fca-35c5-4c32-be9b-4e6c91714869)





