import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from './world_countries'

export default function MyResponsiveGeo({theme, isDashboard = false}) {
    const data = [
        {
          "id": "AFG",
          "value": 304770
        },
        {
          "id": "AGO",
          "value": 812246
        },
        {
          "id": "ALB",
          "value": 454409
        },
        {
          "id": "ARE",
          "value": 612527
        },
        {
          "id": "ARG",
          "value": 733310
        },
        {
          "id": "ARM",
          "value": 382453
        },
        {
          "id": "ATA",
          "value": 191985
        },
        {
          "id": "ATF",
          "value": 512003
        },
        {
          "id": "AUT",
          "value": 501801
        },
        {
          "id": "AZE",
          "value": 985627
        },
        {
          "id": "BDI",
          "value": 767920
        },
        {
          "id": "BEL",
          "value": 93568
        },
        {
          "id": "BEN",
          "value": 399945
        },
        {
          "id": "BFA",
          "value": 489108
        },
        {
          "id": "BGD",
          "value": 69214
        },
        {
          "id": "BGR",
          "value": 263549
        },
        {
          "id": "BHS",
          "value": 44524
        },
        {
          "id": "BIH",
          "value": 827685
        },
        {
          "id": "BLR",
          "value": 244588
        },
        {
          "id": "BLZ",
          "value": 427816
        },
        {
          "id": "BOL",
          "value": 133250
        },
        {
          "id": "BRN",
          "value": 844689
        },
        {
          "id": "BTN",
          "value": 722707
        },
        {
          "id": "BWA",
          "value": 819924
        },
        {
          "id": "CAF",
          "value": 794440
        },
        {
          "id": "CAN",
          "value": 534905
        },
        {
          "id": "CHE",
          "value": 345771
        },
        {
          "id": "CHL",
          "value": 61284
        },
        {
          "id": "CHN",
          "value": 700989
        },
        {
          "id": "CIV",
          "value": 705485
        },
        {
          "id": "CMR",
          "value": 161387
        },
        {
          "id": "COG",
          "value": 892888
        },
        {
          "id": "COL",
          "value": 45996
        },
        {
          "id": "CRI",
          "value": 645364
        },
        {
          "id": "CUB",
          "value": 516335
        },
        {
          "id": "-99",
          "value": 949039
        },
        {
          "id": "CYP",
          "value": 521045
        },
        {
          "id": "CZE",
          "value": 588656
        },
        {
          "id": "DEU",
          "value": 432056
        },
        {
          "id": "DJI",
          "value": 187355
        },
        {
          "id": "DNK",
          "value": 881768
        },
        {
          "id": "DOM",
          "value": 53431
        },
        {
          "id": "DZA",
          "value": 970560
        },
        {
          "id": "ECU",
          "value": 833869
        },
        {
          "id": "EGY",
          "value": 617479
        },
        {
          "id": "ERI",
          "value": 266396
        },
        {
          "id": "ESP",
          "value": 193646
        },
        {
          "id": "EST",
          "value": 124566
        },
        {
          "id": "ETH",
          "value": 313338
        },
        {
          "id": "FIN",
          "value": 30220
        },
        {
          "id": "FJI",
          "value": 838392
        },
        {
          "id": "FLK",
          "value": 167364
        },
        {
          "id": "FRA",
          "value": 477119
        },
        {
          "id": "GAB",
          "value": 571071
        },
        {
          "id": "GBR",
          "value": 147851
        },
        {
          "id": "GEO",
          "value": 154376
        },
        {
          "id": "GHA",
          "value": 869576
        },
        {
          "id": "GIN",
          "value": 383795
        },
        {
          "id": "GMB",
          "value": 953305
        },
        {
          "id": "GNB",
          "value": 139533
        },
        {
          "id": "GNQ",
          "value": 388664
        },
        {
          "id": "GRC",
          "value": 653220
        },
        {
          "id": "GTM",
          "value": 900461
        },
        {
          "id": "GUY",
          "value": 105136
        },
        {
          "id": "HND",
          "value": 437541
        },
        {
          "id": "HRV",
          "value": 237630
        },
        {
          "id": "HTI",
          "value": 222767
        },
        {
          "id": "HUN",
          "value": 756969
        },
        {
          "id": "IDN",
          "value": 592692
        },
        {
          "id": "IND",
          "value": 729224
        },
        {
          "id": "IRL",
          "value": 681111
        },
        {
          "id": "IRN",
          "value": 866546
        },
        {
          "id": "IRQ",
          "value": 349669
        },
        {
          "id": "ISL",
          "value": 407669
        },
        {
          "id": "ISR",
          "value": 664239
        },
        {
          "id": "ITA",
          "value": 149440
        },
        {
          "id": "JAM",
          "value": 531808
        },
        {
          "id": "JOR",
          "value": 938555
        },
        {
          "id": "JPN",
          "value": 744991
        },
        {
          "id": "KAZ",
          "value": 536958
        },
        {
          "id": "KEN",
          "value": 390928
        },
        {
          "id": "KGZ",
          "value": 930084
        },
        {
          "id": "KHM",
          "value": 962729
        },
        {
          "id": "OSA",
          "value": 223929
        },
        {
          "id": "KWT",
          "value": 425667
        },
        {
          "id": "LAO",
          "value": 263143
        },
        {
          "id": "LBN",
          "value": 349645
        },
        {
          "id": "LBR",
          "value": 940917
        },
        {
          "id": "LBY",
          "value": 520819
        },
        {
          "id": "LKA",
          "value": 594822
        },
        {
          "id": "LSO",
          "value": 654290
        },
        {
          "id": "LTU",
          "value": 870098
        },
        {
          "id": "LUX",
          "value": 416894
        },
        {
          "id": "LVA",
          "value": 483044
        },
        {
          "id": "MAR",
          "value": 442180
        },
        {
          "id": "MDA",
          "value": 414165
        },
        {
          "id": "MDG",
          "value": 221215
        },
        {
          "id": "MEX",
          "value": 662839
        },
        {
          "id": "MKD",
          "value": 369219
        },
        {
          "id": "MLI",
          "value": 689814
        },
        {
          "id": "MMR",
          "value": 536863
        },
        {
          "id": "MNE",
          "value": 908169
        },
        {
          "id": "MNG",
          "value": 435431
        },
        {
          "id": "MOZ",
          "value": 701366
        },
        {
          "id": "MRT",
          "value": 135738
        },
        {
          "id": "MWI",
          "value": 332037
        },
        {
          "id": "MYS",
          "value": 447405
        },
        {
          "id": "NAM",
          "value": 835865
        },
        {
          "id": "NCL",
          "value": 90402
        },
        {
          "id": "NER",
          "value": 187264
        },
        {
          "id": "NGA",
          "value": 60895
        },
        {
          "id": "NIC",
          "value": 445756
        },
        {
          "id": "NLD",
          "value": 159209
        },
        {
          "id": "NOR",
          "value": 877627
        },
        {
          "id": "NPL",
          "value": 733156
        },
        {
          "id": "NZL",
          "value": 672344
        },
        {
          "id": "OMN",
          "value": 747604
        },
        {
          "id": "PAK",
          "value": 26995
        },
        {
          "id": "PAN",
          "value": 57099
        },
        {
          "id": "PER",
          "value": 687104
        },
        {
          "id": "PHL",
          "value": 272676
        },
        {
          "id": "PNG",
          "value": 692773
        },
        {
          "id": "POL",
          "value": 577507
        },
        {
          "id": "PRI",
          "value": 181643
        },
        {
          "id": "PRT",
          "value": 603275
        },
        {
          "id": "PRY",
          "value": 199634
        },
        {
          "id": "QAT",
          "value": 262202
        },
        {
          "id": "ROU",
          "value": 656714
        },
        {
          "id": "RUS",
          "value": 487806
        },
        {
          "id": "RWA",
          "value": 882276
        },
        {
          "id": "ESH",
          "value": 540571
        },
        {
          "id": "SAU",
          "value": 461527
        },
        {
          "id": "SDN",
          "value": 431917
        },
        {
          "id": "SDS",
          "value": 922975
        },
        {
          "id": "SEN",
          "value": 631281
        },
        {
          "id": "SLB",
          "value": 323060
        },
        {
          "id": "SLE",
          "value": 538965
        },
        {
          "id": "SLV",
          "value": 513005
        },
        {
          "id": "ABV",
          "value": 91468
        },
        {
          "id": "SOM",
          "value": 181771
        },
        {
          "id": "SRB",
          "value": 520678
        },
        {
          "id": "SUR",
          "value": 236757
        },
        {
          "id": "SVK",
          "value": 791591
        },
        {
          "id": "SVN",
          "value": 450895
        },
        {
          "id": "SWZ",
          "value": 429113
        },
        {
          "id": "SYR",
          "value": 225390
        },
        {
          "id": "TCD",
          "value": 296506
        },
        {
          "id": "TGO",
          "value": 135269
        },
        {
          "id": "THA",
          "value": 281043
        },
        {
          "id": "TJK",
          "value": 527736
        },
        {
          "id": "TKM",
          "value": 198624
        },
        {
          "id": "TLS",
          "value": 871301
        },
        {
          "id": "TTO",
          "value": 904250
        },
        {
          "id": "TUN",
          "value": 114189
        },
        {
          "id": "TUR",
          "value": 459691
        },
        {
          "id": "TWN",
          "value": 478473
        },
        {
          "id": "TZA",
          "value": 183448
        },
        {
          "id": "UGA",
          "value": 136514
        },
        {
          "id": "UKR",
          "value": 608751
        },
        {
          "id": "URY",
          "value": 490439
        },
        {
          "id": "USA",
          "value": 747593
        },
        {
          "id": "UZB",
          "value": 844512
        },
        {
          "id": "VEN",
          "value": 587555
        },
        {
          "id": "VNM",
          "value": 749901
        },
        {
          "id": "VUT",
          "value": 29132
        },
        {
          "id": "PSE",
          "value": 651632
        },
        {
          "id": "YEM",
          "value": 918154
        },
        {
          "id": "ZAF",
          "value": 311247
        },
        {
          "id": "ZMB",
          "value": 17486
        },
        {
          "id": "ZWE",
          "value": 591636
        },
        {
          "id": "KOR",
          "value": 58363
        }
      ]
  return (
        <ResponsiveChoropleth
          data={data}
          features={geo.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="RdYlBu"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionType="mercator"
          projectionScale={isDashboard ? 70 : 150}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          // @ts-ignore
          graticuleLineColor={theme.palette.neutral.dark}
          borderWidth={0.5}
          // @ts-ignore
          borderColor={{ theme: 'labels.text.fill' }}
          theme={{
            "background": "transparent",
            "text": {
              "fontSize": 11,
              // @ts-ignore
              "fill": theme.palette.neutral.main,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
            "axis": {
              "domain": {
                "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
                }
              },
              "legend": {
                "text": {
                  "fontSize": 12,
                  // @ts-ignore
                  "fill": theme.palette.neutral.light,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              },
              "ticks": {
                "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
                },
                "text": {
                  "fontSize": 11,
                  "fill": theme.palette.secondary.light,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              }
            },
            "grid": {
              "line": {
                "stroke": "#dddddd",
                "strokeWidth": 1
              }
            },
            "legends": {
              "title": {
                "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              },
              "text": {
                "fontSize": 11,
                // @ts-ignore
                "fill": theme.palette.neutral.light,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              },
              "ticks": {
                "line": {},
                "text": {
                  "fontSize": 10,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              }
            },
            "annotations": {
              "text": {
                "fontSize": 13,
                "fill": "#333333",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              }
            },
            "tooltip": {
              "wrapper": {},
              "container": {
                "background": "#ffffff",
                // @ts-ignore
                "color": theme.palette.neutral.main,
                "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
            }
          }}
          defs={[
            {
              id: 'dot',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'line',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            },
            {
              id: 'gradient',
              type: 'linearGradient',
              colors: [
                {
                  offset: 0,
                  color: '#000'
                },
                {
                  offset: 100,
                  color: 'inherit'
                }
              ]
            }
          ]}
          fill={[
            {
              match: {
                id: 'CAN'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'CHN'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'ATA'
              },
              id: 'gradient'
            }
          ]}
          legends={isDashboard ? [] : [
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 0,
              translateY: 0,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              // @ts-ignore
              itemTextColor: theme.palette.neutral.light,
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    // @ts-ignore
                    itemTextColor: theme.palette.neutral.light,
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      )
}
