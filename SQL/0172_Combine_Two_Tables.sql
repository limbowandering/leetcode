
select FirstName, LastName, City, State FROM Person LEFT JOIN Address ON Person.PersonId=Address.PersonId

select p.FirstName, p.LastName, a.City, a.State From Person p LEFT JOIN Address a On p.PersonId=a.PersonId

----------- 测试用 -----------------
create table `Person` (
	`PersonId` int,
	`FirstName` varchar(100),
	`LastName` varchar(100),
	PRIMARY KEY (`PersonId`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `person` VALUES (1, 'Person1FirstName', 'Person1LastName');
INSERT INTO `person` VALUES (2, 'Person2FirstName', 'Person2LastName');

CREATE TABLE `address`  (
  `AddressId` int(11) NOT NULL,
  `PersonId` int(11) NULL DEFAULT NULL,
  `City` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `State` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`AddressId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

INSERT INTO `address` VALUES (1, 1, 'City1', 'State1');
INSERT INTO `address` VALUES (2, 2, 'City2', 'State2');

--------------------------------------
