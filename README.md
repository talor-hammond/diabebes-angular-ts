# diabebes-angular-ts
Little web-app to track blood-glucose readings, notes and stuff made with Angular 2 & TypeScript

* Plan to use [this course](https://www.udemy.com/the-complete-guide-to-angular-2) for the learning of best-practices & convention w Angular & ts

### Initial thoughts
* **angular-cli is awesome**
    * `ng g c ${componentName}` is super-powerful: streamlines workflow, sets up test-suite, unique stylesheet
    * planned all the initial components / model / features out and then ticked-through prefacing with the CLI
* **TypeScript**
    * the OOP-approach feels really familiar (coming from Swift which is *heavily-typed* as well)
    * **Code Quality**
        * love how errors / issues are sprung in real-time -- as opposed to run-time
    * planned all the initial components / model / features out and then ticked-through prefacing with the CLI
* **really enjoy the way everything looks & feels *separated***
    * while the conventional-directory seems more complex than a simple react-app, everything feels nicely segregated into specific parts: components, testing, models, css split up
* **dealing with natural-HTML is really refreshing**
    * coming from using JSX which can get messy sometimes; especially with syntactical issues from ES6 & Babel <6 not co-operating sometimes

### To-do's / next-up
* use [ngClass] attribute-directive to dynamically return `list-item-group-${colour}` based on the bg reading
* add new `Reading` objects into the readings array through the form; get it to reset on `(ngSubmit)`
* compare latest and previous reading (nb: use index built in to `*ngFor*` directive), return trend / arrow dynamically
* use a time-picker library for consistency in `readings.time` 
* routing w angular
