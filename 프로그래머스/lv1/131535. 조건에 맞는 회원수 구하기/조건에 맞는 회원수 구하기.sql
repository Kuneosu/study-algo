-- 코드를 입력하세요
SELECT COUNT(*) as USERS
FROM USER_INFO
WHERE extract(year from JOINED)='2021' and AGE>=20 and AGE<=29;