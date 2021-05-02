const cabiStationInformationMock = {
  data: {
    stations: [
      {
        station_type: "classic",
        electric_bike_surcharge_waiver: false,
        rental_uris: {
          ios: "https://dc.lft.to/lastmile_qr_scan",
          android: "https://dc.lft.to/lastmile_qr_scan",
        },
        eightd_station_services: [],
        lat: 38.858971,
        capacity: 15,
        lon: -77.05323,
        eightd_has_key_dispenser: false,
        has_kiosk: true,
        legacy_id: "1",
        region_id: "41",
        short_name: "31000",
        external_id: "082469cc-1f3f-11e7-bf6b-3863bb334450",
        station_id: "1",
        rental_methods: ["CREDITCARD", "KEY"],
        name: "Eads St & 15th St S",
      },
      {
        station_type: "classic",
        electric_bike_surcharge_waiver: false,
        rental_uris: {
          ios: "https://dc.lft.to/lastmile_qr_scan",
          android: "https://dc.lft.to/lastmile_qr_scan",
        },
        eightd_station_services: [],
        lat: 38.85725,
        capacity: 11,
        lon: -77.05332,
        eightd_has_key_dispenser: false,
        has_kiosk: true,
        legacy_id: "2",
        region_id: "41",
        short_name: "31001",
        external_id: "08246b69-1f3f-11e7-bf6b-3863bb334450",
        station_id: "2",
        rental_methods: ["CREDITCARD", "KEY"],
        name: "18th St & S Eads St",
      },
      {
        station_type: "classic",
        electric_bike_surcharge_waiver: false,
        rental_uris: {
          ios: "https://dc.lft.to/lastmile_qr_scan",
          android: "https://dc.lft.to/lastmile_qr_scan",
        },
        eightd_station_services: [],
        lat: 38.856425,
        capacity: 17,
        lon: -77.049232,
        eightd_has_key_dispenser: false,
        has_kiosk: true,
        legacy_id: "3",
        region_id: "41",
        short_name: "31002",
        external_id: "08246c35-1f3f-11e7-bf6b-3863bb334450",
        station_id: "3",
        rental_methods: ["CREDITCARD", "KEY"],
        name: "Crystal Dr & 20th St S",
      },
    ],
  },
  last_updated: 1619971260,
  ttl: 5,
};

// eslint-disable-next-line import/prefer-default-export
export { cabiStationInformationMock };
