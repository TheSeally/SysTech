SystemTechnologyTestCase
Выполненное тестовое задание для вакансии Junior Javascript
Тестовое задание представлено в файле Системные Технологии - Тестовое задание JS

SQL-запрос для выбора нужных строк из таблиц: SELECT docs.date, docTypes.name AS docName, docs.typeId, docs.id as docId, products.image AS Img, products.name AS prodName, rows.quantity, products.price, products.removed AS prodAvail FROM docs LEFT JOIN docTypes ON docs.typeId = docTypes.id LEFT JOIN rows ON rows.docId = docs.id LEFT JOIN products ON rows.productId = products.id WHERE docTypes.removed != 1 AND prodAvail != 1 ORDER BY docs.date

Для выполнения запроса к базе данных использовалась библиотке для Node.js - sqlite3. Для запуска SQL запроса необходимо выполнить команду npm run build результат запроса в формате json будет сохранен в файле result.json.

На основе полученных данных была сверстана веб-страница с использованием шаблонизатора Handlebars (шаблонизация осуществляется на стороне клиента).

В случае необходимости могу реализовать получение данных из базы данных с помощью AJAX запроса, а также шаблонизацию на стороне сервера.
