const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('database.db3');

db.all("SELECT date as docDate, \
               docTypes.name as docType, \
               docs.id as docID, \
               products.image as prodImg, \
               products.name as prodName, \
               products.price as prodPrc, \
               rows.quantity as rowQnt, \
               products.removed as prodAvail \
        FROM docs \
        LEFT JOIN docTypes ON docs.typeId = docTypes.id \
        LEFT JOIN rows ON docs.id = rows.docId \
        LEFT JOIN products ON rows.productId = products.id \
        WHERE docs.removed = 0 AND \
              rows.removed = 0 AND \
              docTypes.removed = 0 \
        ORDER BY docDate ASC;",
    (_err, result) => {
        if (_err) {
            throw _err;
        }
        fs.writeFile("result.json", JSON.stringify(result), (_err) => console.log(_err));
    });

db.close();
