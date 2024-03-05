import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  { slno: "01.", name: "Trivago", price: "$520", return: "+5%" },
  { slno: "02.", name: "Canon", price: "$480", return: "+10%" },
  { slno: "03.", name: "Uber Food", price: "$350", return: "-3%" },
  { slno: "04.", name: "Nokia", price: "$940", return: "+2%" },
  { slno: "05.", name: "Tiktok", price: "$670", return: "-12%" },
];

export default function InvestmentsPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("slno", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2 pl-[30px] !font-medium">
            SL No
          </Text>
        ),
        meta: { width: "112px" },
      }),
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2 !font-medium">
            Name
          </Text>
        ),
        meta: { width: "131px" },
      }),
      table1ColumnHelper.accessor("price", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2 !font-medium">
            Price
          </Text>
        ),
        meta: { width: "104px" },
      }),
      table1ColumnHelper.accessor("return", {
        cell: (info) => (
          <Text as="p" className="!text-green-600 !font-medium">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2 !font-medium">
            Return
          </Text>
        ),
        meta: { width: "98px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Adwait's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full bg-gray-100">
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[31px]">
          <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] gap-[26px]">
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[32%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_money_bag_of_dollars.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[57%] gap-[7px]">
                  <Text as="p">Total Invested Amount</Text>
                  <Heading size="xl" as="h1" className="!text-indigo-600_01">
                    $150,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[32%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_group_305.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[59%] gap-2">
                  <Text as="p">Number of Investments</Text>
                  <Heading size="xl" as="h2" className="!text-indigo-600_01">
                    1,250
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[32%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_repeat_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[37%] gap-[7px]">
                  <Text as="p">Rate of Return</Text>
                  <Heading size="xl" as="h3" className="!text-indigo-600_01">
                    +5.80%
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[49%] gap-[17px]">
                <Heading as="h4">Yearly Total Investment</Heading>
                <div className="flex flex-row justify-center w-full p-[26px] bg-white-A700 rounded-[25px]">
                  <div className="flex flex-row justify-center w-[99%] ml-0.5 mr-[3px]">
                    <div className="flex flex-row justify-start items-start w-full gap-2">
                      <div className="flex flex-col items-end justify-start w-[11%] gap-[31px]">
                        <Text size="s" as="p" className="mr-px text-right">
                          $40,000
                        </Text>
                        <Text size="s" as="p" className="mr-px text-right">
                          $30,000
                        </Text>
                        <Text size="s" as="p" className="mr-px text-right">
                          $20,000
                        </Text>
                        <Text size="s" as="p" className="mr-px text-right">
                          $10,000
                        </Text>
                        <Text size="s" as="p" className="h-[16px] text-right">
                          $0
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[88%] mt-[13px]">
                        <div className="h-px w-full border-gray-100_02 border border-dashed" />
                        <div className="h-[161px] w-full mt-1.5 relative">
                          <div className="flex flex-col items-center justify-start w-full gap-[47px] bottom-[14%] right-0 left-0 m-auto absolute">
                            <div className="h-px w-full border-gray-100_02 border border-dashed" />
                            <div className="h-px w-full border-gray-100_02 border border-dashed" />
                            <div className="h-px w-full border-gray-100_02 border border-dashed" />
                          </div>
                          <Img
                            src="images/img_statistics.svg"
                            alt="image"
                            className="justify-center h-[161px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                        </div>
                        <div className="h-px w-full mt-[22px] border-gray-100_02 border border-dashed" />
                        <div className="flex flex-row justify-between w-[96%] mt-[7px]">
                          <Text size="s" as="p" className="text-center">
                            2016
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2017
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2018
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2019
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2020
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[49%] gap-[17px]">
                <Heading as="h5">Monthly Revenue</Heading>
                <div className="flex flex-row justify-center w-full p-[26px] bg-white-A700 rounded-[25px]">
                  <div className="flex flex-row justify-start items-start w-[99%] ml-0.5 mr-[3px] gap-[9px]">
                    <div className="flex flex-col items-end justify-start w-[12%] gap-[31px]">
                      <Text size="s" as="p" className="text-right">
                        $40,000
                      </Text>
                      <Text size="s" as="p" className="text-right">
                        $30,000
                      </Text>
                      <Text size="s" as="p" className="text-right">
                        $20,000
                      </Text>
                      <Text size="s" as="p" className="text-right">
                        $10,000
                      </Text>
                      <Text size="s" as="p" className="h-[16px] text-right">
                        $0
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start w-[88%] mt-[13px]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-px w-full border-gray-100_02 border border-dashed" />
                        <div className="h-[111px] w-full mt-[25px] relative">
                          <div className="flex flex-col items-center justify-start w-full gap-[47px] top-[20%] right-0 left-0 m-auto absolute">
                            <div className="h-px w-full border-gray-100_02 border border-dashed" />
                            <div className="h-px w-full border-gray-100_02 border border-dashed" />
                          </div>
                          <Img
                            src="images/img_vector_6.svg"
                            alt="vectorsix_one"
                            className="justify-center h-[111px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                        </div>
                        <div className="h-px w-full mt-[7px] border-gray-100_02 border border-dashed" />
                        <div className="h-px w-full mt-[45px] border-gray-100_02 border border-dashed" />
                        <div className="flex flex-row justify-between w-[97%] mt-[7px]">
                          <Text size="s" as="p" className="text-center">
                            2016
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2017
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2018
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2019
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2020
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[58%] gap-[15px]">
                <Heading as="h6">My Investment</Heading>
                <div className="flex flex-col w-full gap-[15px]">
                  <div className="flex flex-row justify-start items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_group_245.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[31%] ml-5 gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Apple Store
                      </Text>
                      <Text size="lg" as="p">
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[21%] ml-14 gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        $54,000
                      </Text>
                      <Text size="lg" as="p">
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[15%] ml-11 gap-[5px]">
                      <Text as="p" className="!text-green-600 !font-medium">
                        +16%
                      </Text>
                      <Text size="lg" as="p">
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_group_875.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[31%] ml-5 gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Samsung Mobile
                      </Text>
                      <Text size="lg" as="p">
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[21%] ml-14 gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        $25,300
                      </Text>
                      <Text size="lg" as="p">
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[15%] ml-11 gap-[5px]">
                      <Text as="p" className="!text-red-700 !font-medium">
                        -4%
                      </Text>
                      <Text size="lg" as="p">
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                    <div className="flex flex-row justify-start items-center w-[33%] gap-5">
                      <Button size="3xl" shape="round" className="w-[60px]">
                        <Img src="images/img_group_876.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[60%] gap-[5px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          Tesla Motors
                        </Text>
                        <Text size="lg" as="p">
                          Electric Vehicles
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between w-[44%] mr-[21px]">
                      <div className="flex flex-col items-start justify-start gap-[5px]">
                        <Text as="p" className="!text-blue_gray-900 !font-medium">
                          $8,200
                        </Text>
                        <Text size="lg" as="p">
                          Envestment Value
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[5px]">
                        <Text as="p" className="!text-green-600 !font-medium">
                          +25%
                        </Text>
                        <Text size="lg" as="p">
                          Return Value
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[41%] gap-[15px]">
                <Heading as="h5">Trending Stock</Heading>
                <div className="flex flex-row justify-start w-full pt-[26px]">
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[445px] bg-white-A700 rounded-[25px]"
                    columns={table1Columns}
                    data={table1Data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
