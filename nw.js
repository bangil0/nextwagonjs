/*! nwJS | (c) Muhammad Fauzan | github.com/fauzan121002/nwjs/license.md */ 

class Nw {

    // constructor for variable inside class object
    constructor() {
        (this.inputCount = 0), (this.totalInputCount = 0);
    }

    // start validation process
    start() {
        // get all selected dom query of the selectors
        let t = document.querySelectorAll("form[validate] input[type=text],input[type=checkbox],textarea,input[type=password],input[type=email],input[type=file],input[type=radio],input[type=number]");
        
        //get count of dom query
        for (let o of t) (this.inputCount = this.inputCount + 1), (this.totalInputCount = this.totalInputCount + 1);
        
        //validate form with validate attribute
        document.querySelectorAll("form[validate]").forEach((t) => {
            let o = t;
            t.addEventListener("submit", (t) => {
                t.preventDefault(),

                    // input type text selector
                    document.querySelectorAll("form[validate] input[type=text]").forEach((t) => {
                        if ("" === t.value) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please fill the " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),

                    // input type textarea selector
                    document.querySelectorAll("form[validate] textarea").forEach((t) => {
                        if ("" == t.value) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please fill the " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),

                    // input type checkbox selector
                    document.querySelectorAll("form[validate] input[type=checkbox]").forEach((t) => {
                        if (0 == t.checked) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please choose one of " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),

                    // input type password selector
                    document.querySelectorAll("form[validate] input[type=password]").forEach((t) => {
                        if ("" == t.value) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please fill the " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),

                    // input type email selector
                    document.querySelectorAll("form[validate] input[type=email]").forEach((t) => {
                        if ("" == t.value) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please fill the " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),

                    // input type file selector
                    document.querySelectorAll("form[validate] input[type=file]").forEach((t) => {
                        if (0 == t.files.length) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please upload the file of " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.color = "red");
                        } else (t.style.color = "black"), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),

                    // input type radio selector
                    document.querySelectorAll("form[validate] input[type=radio]").forEach((t) => {
                        if (0 == t.checked) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please choose one of " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    }),
                    
                    // input type number selector
                    document.querySelectorAll("form[validate] input[type=number]").forEach((t) => {
                        if ("" == t.value) {
                            let o = t.id;
                            document.querySelectorAll("[error=" + o + "]").forEach((t) => {
                                (t.style.fontSize = "12px"), (t.style.color = "red"), (t.innerHTML = "Please fill the " + o);
                            }),
                                (this.inputCount = this.inputCount + 1),
                                (this.inputCount > this.totalInputCount || this.inputCount < this.totalInputCount) && (this.inputCount = this.totalInputCount),
                                (t.style.boxShadow = "0px 0px 3px red");
                        } else (t.style.boxShadow = ""), (this.inputCount = this.inputCount - 1), 0 == this.inputCount && o.submit();
                    });
            });
        });
    }
}

// call the class with function start and it's constructor
new Nw().start();
