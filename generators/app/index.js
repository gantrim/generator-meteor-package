'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        var prompts = [{
            type: 'input',
            name: 'packageNamespace',
            message: 'Package namespace',
            default: "app"
        }, {
            type: 'input',
            name: 'packageName',
            message: 'Package name',
            default: "my-package"
        }];

        this.prompt(prompts, function (answers) {
            this.props = answers
            this.log("Package will be "+answers.packageNamespace+":"+answers.packageName);
            done();
        }.bind(this));
    },
    writing: {
        app:function(){
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'), {
                    name: this.props.name
                }
            );
        }
    }
    // prompting: function() {
    //   var done = this.async();
    //   this.prompt({
    //     type: 'input',
    //     name: 'packageName',
    //     message: 'Full Package name ({packageNameSpace}:{packageName}): ',
    //     default: "app:my-package"
    //   }, function(answers) {
    //     this.props = answers
    //     this.log(answers.name);
    //     done();
    //   }.bind(this));
    // },
});