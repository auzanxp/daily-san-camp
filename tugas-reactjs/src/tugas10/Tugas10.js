import React from "react";
import { Table } from "flowbite-react";

const Tugas10 = () => {
  return (
    <div>
      <Table
        hoverable={true}
        className="w-3/4 m-auto mb-10 table-auto drop-shadow-lg"
      >
        <Table.Head className="text-center bg-purple-600">
          <Table.HeadCell className="text-white ">NO</Table.HeadCell>
          <Table.HeadCell className="text-white ">NAMA</Table.HeadCell>
          <Table.HeadCell className="text-white ">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="text-white ">NILAI</Table.HeadCell>
          <Table.HeadCell className="text-white ">INDEX NILAI</Table.HeadCell>
          <Table.HeadCell className="text-white ">ACTION</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="text-center bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Jhon</Table.Cell>
            <Table.Cell>Algoritma</Table.Cell>
            <Table.Cell>80</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Edit
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="text-center bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Doe</Table.Cell>
            <Table.Cell>Matematika</Table.Cell>
            <Table.Cell>70</Table.Cell>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Edit
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="text-center bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Frank</Table.Cell>
            <Table.Cell>Kalkulus</Table.Cell>
            <Table.Cell>60</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Edit
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="text-center bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Jason</Table.Cell>
            <Table.Cell>Basis data</Table.Cell>
            <Table.Cell>90</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Edit
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Tugas10;
