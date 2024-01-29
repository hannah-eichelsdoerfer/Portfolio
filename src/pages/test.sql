INSERT INTO OFFICIAL VALUES 
    ('SPN99745', 'Ju', 'ES', 'Daniel', 'Ortega');
 
INSERT INTO OFFICIAL_LANGUAGE VALUES 
    ('SPN99745', 'en', 2), 
    ('SPN99745', 'es', 1);
 
INSERT INTO COUNTRY_LANGUAGE VALUES 
    ('ES', 'en', 98.00),
 
INSERT INTO LOCATION VALUES 
    (NULL, 'Ho', 16, 'Brendan Thorne Place', 'Gold Coast', 'Qld', '4225'), 
    (NULL, 'Sp', 117, 'Rubicon Crescent', 'Gold Coast', 'Qld', '4218');
 
INSERT INTO VEHICLE VALUE 
    ('SANFDAE33U1286116', 'Se', 'Mercedez-Benz', 'E220', '2019', 'Black', '249DJS', 126982, 'Y', 'Y', 'N');
 
INSERT INTO PASSENGER_VEHICLE VALUES 
    ('SANFDAE33U1286116', 4);
 
INSERT INTO DRIVER VALUE 
    ('098 675 532', 'Md', 'Polash', 2, 'Y');
 
INSERT INTO DRIVER_LANGUAGE VALUE 
    ('en', '098 675 532', 4);

INSERT INTO TRIP VALUE 
    (101, NULL, 'SPN99745', NULL, 27, 28, NULL, '2023-04-09 10:00:00', '2023-04-09 10:45:00', NULL, NULL, NULL, NULL);


START TRANSACTION;
UPDATE TRIP
SET 
    VIN = 'SANFDAE33U1286116', 
    StartOdometerKM = 126982, 
    DriverLicenceNum = '098 675 532', 
    StartTimeActual = '2023-04-09 10:15:00', 
    EndTimeActual = '2023-04-09 11:55:00', 
    EndOdometerKM = 127119
WHERE BookingRefNum = 101;
COMMIT;

INSERT INTO TRIP VALUES (
113,
NULL,
'SPN99745',
NULL,
(
SELECT LocationID 
FROM LOCATION 
WHERE StreetName = 'Brendan Thorne Place' AND City = 'Gold Coast'
),
(
SELECT LocationID 
FROM LOCATION 
WHERE StreetName = 'Rubicon Crescent' AND City = 'Gold Coast'
),
NULL,
'2023-04-09 10:00:00',
'2023-04-09 10:45:00',
NULL, 
NULL, 
NULL, 
NULL
);

