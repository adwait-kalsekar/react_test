import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table2Data = [
  {
    slno: "01.",
    loanmoney: "$100,000",
    lefttorepay: "$40,500",
    duration: "8 Months",
    interestrate: "12%",
    installment: "$2,000 / month",
    repay: "Repay",
  },
  {
    slno: "02.",
    loanmoney: "$500,000",
    lefttorepay: "$250,000",
    duration: "36 Months",
    interestrate: "10%",
    installment: "$8,000 / month",
    repay: "Repay",
  },
  {
    slno: "03.",
    loanmoney: "$900,000",
    lefttorepay: "$40,500",
    duration: "12 Months",
    interestrate: "12%",
    installment: "$5,000 / month",
    repay: "Repay",
  },
  {
    slno: "04.",
    loanmoney: "$50,000",
    lefttorepay: "$40,500",
    duration: "25 Months",
    interestrate: "5%",
    installment: "$2,000 / month",
    repay: "Repay",
  },
  {
    slno: "05.",
    loanmoney: "$50,000",
    lefttorepay: "$40,500",
    duration: "5 Months",
    interestrate: "16%",
    installment: "$10,000 / month",
    repay: "Repay",
  },
  {
    slno: "06.",
    loanmoney: "$80,000",
    lefttorepay: "$25,500",
    duration: "14 Months",
    interestrate: "8%",
    installment: "$2,000 / month",
    repay: "Repay",
  },
  {
    slno: "07.",
    loanmoney: "$12,000",
    lefttorepay: "$5,500",
    duration: "9 Months",
    interestrate: "13%",
    installment: "$500 / month",
    repay: "Repay",
  },
  {
    slno: "08.",
    loanmoney: "$160,000",
    lefttorepay: "$100,800",
    duration: "3 Months",
    interestrate: "12%",
    installment: "$900 / month",
    repay: "Repay",
  },
  {
    slno: "Total",
    loanmoney: "$125,0000",
    lefttorepay: "$750,000",
    duration: "8 Months",
    interestrate: "12%",
    installment: "$50,000 / month",
    repay: "Repay",
  },
];

export default function LoanPage() {
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("slno", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-[11px] !font-medium">
            SL No
          </Text>
        ),
        meta: { width: "100px" },
      }),
      table2ColumnHelper.accessor("loanmoney", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2.5 !font-medium">
            Loan Money
          </Text>
        ),
        meta: { width: "168px" },
      }),
      table2ColumnHelper.accessor("lefttorepay", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2.5 !font-medium">
            Left to repay
          </Text>
        ),
        meta: { width: "174px" },
      }),
      table2ColumnHelper.accessor("duration", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-[11px] !font-medium">
            Duration
          </Text>
        ),
        meta: { width: "171px" },
      }),
      table2ColumnHelper.accessor("interestrate", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-[11px] !font-medium">
            Interest rate
          </Text>
        ),
        meta: { width: "147px" },
      }),
      table2ColumnHelper.accessor("installment", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-[11px] !font-medium">
            Installment
          </Text>
        ),
        meta: { width: "172px" },
      }),
      table2ColumnHelper.accessor("repay", {
        cell: (info) => (
          <div className="h-[20px] relative">
            <Text size="lg" as="p" className="left-1/4 top-0 m-auto !text-indigo-500 text-center !font-medium absolute">
              {info?.getValue?.()}
            </Text>
            <div className="h-[35px] w-[85%] left-[2%] top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2.5 !font-medium">
            Repay
          </Text>
        ),
        meta: { width: "118px" },
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
          <div className="flex flex-col items-center justify-start w-[94%] gap-6">
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[23%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_user_3_2.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[57%] gap-[7px]">
                  <Text as="p">Personal Loans</Text>
                  <Heading size="xl" as="h1">
                    $50,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] gap-[15px] p-[21px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px] my-1">
                  <Img src="images/img_briefcase_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[60%] gap-1.5">
                  <Text as="p">Corporate Loans</Text>
                  <Heading size="xl" as="h2">
                    $100,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_graph_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[58%] gap-[7px]">
                  <Text as="p">Business Loans</Text>
                  <Heading size="xl" as="h3">
                    $500,000
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] gap-3 p-[21px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px] my-1">
                  <Img src="images/img_group_296.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[62%] gap-2.5">
                  <Text as="p">Custom Loans</Text>
                  <Heading size="lg" as="h4">
                    Choose Money
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3.5">
              <Heading as="h5">Active Loans Overview</Heading>
              <div className="flex flex-row justify-center w-full p-5 bg-white-A700 rounded-[25px]">
                <ReactTable
                  size="md"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "" }}
                  className="w-[1050px] mx-[9px]"
                  columns={table2Columns}
                  data={table2Data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
