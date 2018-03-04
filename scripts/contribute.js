var GithubAPI = {
  url: 'https://api.github.com/repos/PeARSearch',

  repos: ['PeARS-orchard'],

  com: function (method, url, cb, ctx) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function() {
      cb.call(ctx, JSON.parse(this.response));
    };
    xhr.send();
  },

  getIssues: function () {
    this.repos.forEach(function (repo) {
      var url = [this.url, repo, 'issues'].join('/');
      this.com('GET', url, this.updateIssues(repo), this);
    }, this);
  },

  updateIssues: function (repo) {
    return function (list) {
      var issueCount = list.filter(function (item) {
        console.log(item.state, item.id)
        return item.state === 'open'
      }, this);

      document.querySelector('#' + repo).innerHTML = issueCount.length;
    }
  },

  init: function () {
    this.getIssues();
  }
};

var Contribute = {
  selectors:  {},

  loadSelectors: function () {
    this.selectors.$instructionSetHeader = document.querySelector('.InstructionSet__Header');
    this.selectors.$instructionSetContent = document.querySelector('.InstructionSet__Content');
    console.log(this.selectors);
  },

  loadEventBindings: function () {
    this.selectors.$instructionSetHeader
      .addEventListener('click', this.onInstructionHeaderClick.bind(this));
  },

  onInstructionHeaderClick: function (e) {
    console.log('onInstructionHeaderClick');
    var classList = this.selectors.$instructionSetContent.classList;
    if(classList.contains('hide'))  {
      classList.remove('hide');
    }else {
      classList.add('hide');
    }
  },

  init: function () {
    this.loadSelectors();
    this.loadEventBindings();
    GithubAPI.init();
  }
};

window.onload = function () {
  Contribute.init();
};
