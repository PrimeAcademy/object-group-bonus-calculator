var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var Employee = function (name, empNum, annualSal, rating) {
	this.name = name;
	this.empNum = empNum;
	this.annualSal = annualSal;
	this.rating = rating;
};

var Info = function(name, percentSti, annualComp, totalBonus) {
	this.name = name;
	this.percentSti = percentSti;
	this.annualComp = annualComp;
	this.totalBonus = totalBonus;
}

var employees = [];

employees.push(new Employee(atticus[0], atticus[1], atticus[2], atticus[3]));
employees.push(new Employee(jem[0], jem[1], jem[2], jem[3]));
employees.push(new Employee(boo[0], boo[1], boo[2], boo[3]));
employees.push(new Employee(scout[0], scout[1], scout[2], scout[3]));


function parseEmployee(emp) {
	var salary = parseInt(emp.annualSal);
	var percentSti = 0;

	if (emp.empNum.length === 4) {
		percentSti += 0.05;
	}

	if (salary > 65000) {
		percentSti -= 0.01;
	}
	
	if (emp.rating === 3) {
		percentSti += 0.04;
	} else if (emp.rating === 4) {
		percentSti += 0.06;
	} else if (emp.rating === 5) {
		percentSti += 0.10;
	}

	if (percentSti > 0.13) {
		percentSti = 0.13;
	}

	var totalBonus = Math.round(salary * percentSti);
	var annualComp = salary + totalBonus;

	return new Info(emp.name, percentSti, annualComp, totalBonus);
}

employees.forEach(function (elem) {
	console.log(parseEmployee(elem));
});
