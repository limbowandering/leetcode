
SELECT (SELECT MAX(Salary) FROM Employee WHERE Salary NOT IN (SELECT MAX(Salary) FROM Employee)) SecondHighestSalary;

SELECT (SELECT Salary FROM Employee GROUP BY Salary ORDER BY Salary DESC LIMIT 1,1) SecondHighestSalary;

SELECT (SELECT DISTINCT Salary AS SecondHighestSalary FROM Employee ORDER BY Salary DESC LIMIT 1,1) AS SecondHighestSalary;

SELECT IFNULL((SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT 1,1), NULL) AS SecondHighestSalary;

------------------------------------------------
CREATE table `Employee`(
	`Id` Int,
	`Salary` Int,
	PRIMARY KEY (`Id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO Employee VALUES(1,100);
INSERT INTO Employee VALUES(2,200);
INSERT INTO Employee VALUES(3,300);
-------------------------------------------