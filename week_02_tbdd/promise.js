var f = function (relsolve, reject) {
    relsolve();
    reject();
}
var promise = new Promise(f);
promise
    .then()
    .catch()
    .finally();

promise
    .then(
        function () {
            console.log('Successful!');
        }
    )
    .catch(
        function () {
            console.log('UnSuccessful!');
        }
    )
    .finally(
        function () {
            console.log('Finally!');
        }
    );

//promise chain
promise
    .then(
        function () {
            console.log('1!');
        }
    )
    .then(
        function () {
            console.log('2!');
        }
    )
    .then(
        function () {
            console.log('3!');
        }
    )

promise
    .then(
        function () {
            console.log(0);
            return 1;
        }
    )
    .then(
        function (data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function (data) {
            console.log(data);
        }
    )

//return promise
promise
    .then(
        function () {
            return new Promise(function (resolve) {
                setTimeout(resolve, 3000);
            });
        }
    )
    .then(
        function (data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function (data) {
            console.log(data);
        }
    )
