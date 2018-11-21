# SystemTechnologyTestCase
Выполненное тестовое задание для вакансии Junior Javascript
Тестовое задание представлено в файле [Системные Технологии - Тестовое задание JS](https://github.com/TheSeally/SysTech/blob/master/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B5%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8%20-%20%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20JS.docx)

В [файле main.js](https://github.com/TheSeally/SysTech/blob/master/main.js) находится функция по извлечению данных из БД.
Для выполнения запроса к базе данных использовалась библиотка для Node.js - sqlite3. Для запуска SQL запроса необходимо выполнить команду `npm run build` результат запроса в формате json будет сохранен в файле result.json.

На основе полученных данных была сверстана веб-страница с использованием шаблонизатора Nunjucks (в соответствии с заданием шаблонизация осуществляется на стороне клиента, поэтому шаблон находится в файле [index.html](https://github.com/TheSeally/SysTech/blob/master/src/index.html)).

В случае необходимости могу реализовать получение данных из базы данных с помощью AJAX запроса, а также шаблонизацию на стороне сервера.
