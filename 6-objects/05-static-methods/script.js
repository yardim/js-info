'use strict';

function Article() {
  this.created = new Date();

  Article.count++;
  Article.last = this.created;
}

Article.count = 0;
Article.showStats = function() {
  console.log(`All count: ${this.count}, last: ${this.last}`);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
