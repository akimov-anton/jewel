/**
 * Created by anton on 10.02.17.
 */
const fs = require('fs');
const path = require('path');
const css = require('css');
const util = require('util');
const _ = require('underscore');
const stringSearcher = require('string-search');

var cssPath = path.join(path.normalize(`${__dirname}/../public/`), 'main.css');
var usagePath = path.join(path.normalize(`${__dirname}/../src/js`), 'Header.js');

var createCssObject = function (cssPath, callback) {
    fs.readFile(cssPath, {encoding: 'utf-8'}, (err, data) => {
        if (!err){
            let css_object = {};
            let parsed = css.parse(data).stylesheet.rules;

            let all_elements = _.flatten(_.pluck(parsed, 'selectors'));
            let all_classes = all_elements.filter((el) => /^\./.test(el));
            all_classes.map((el) => {
                let el_classes = /[A-Za-z_.]+/.exec(el)[0].split('.');

                if (el_classes.length > 2) {
                    el_classes.map((el_class) => {
                        if (el_class) {
                            css_object[el_class] = 0
                        }
                    });
                } else {
                    css_object[el_classes[1]] = 0;
                }
            });

            callback(css_object);
        }else{
            console.log(err);
        }
    });
};

var findUsageClasses = function (usagePath, classesObject) {
    fs.readFile(usagePath, {encoding: 'utf-8'}, (err, data) => {

        for(var className in classesObject) {
            ((className) => {
                stringSearcher.find(data, `\\W+${className}\\W+`)
                    .then((resultArr) => {
                        if (resultArr.length) {
                        } else {
                            console.log(className);
                        }
                    });
            })(className);
        }
    });
};

createCssObject(cssPath, (classesObject) => {
    findUsageClasses(usagePath, classesObject);
});