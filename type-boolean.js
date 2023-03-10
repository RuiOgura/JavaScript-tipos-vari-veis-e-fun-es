const primeiroNumero = 5;
const segundoNumero = 10;
let cadastroAtivado = true;

console.log(primeiroNumero === segundoNumero);  //false

const texto1= "Alura";
const texto2= "alura";

console.log (texto1 === texto2); //false 

/*   processo no GITHUB- no terminal

PS C:\Users\kodom\Desktop\JS-aula> git init
Initialized empty Git repository in C:/Users/kodom/Desktop/JS-aula/.git/
PS C:\Users\kodom\Desktop\JS-aula> git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        type-boolean.js
        type-number.js
        type-string.js

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\kodom\Desktop\JS-aula> git remote add origin https://github.com/RuiOgura/JavaScript-tipos-vari-veis-e-fun-es.git    

PS C:\Users\kodom\Desktop\JS-aula> git add .

PS C:\Users\kodom\Desktop\JS-aula> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   type-boolean.js
        new file:   type-number.js
        new file:   type-string.js

PS C:\Users\kodom\Desktop\JS-aula> git commit -m "Aula 1"
[master (root-commit) f3970a4] Aula 1
 3 files changed, 68 insertions(+)
 create mode 100644 type-boolean.js
 create mode 100644 type-number.js
 create mode 100644 type-string.js
PS C:\Users\kodom\Desktop\JS-aula> git push origin master

*/
