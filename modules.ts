import { dbUrl, getData, saveData as save } from './modules/db';
import de from './modules/db';
 
console.log(dbUrl);
getData();
save();
de();
//模块化于es6相同 也可暴露引入namespace