// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="p-4">
// //       <h1 className="text-5xl p-4">A/B Testing</h1>
// //       <div className="px-4">
// //       <p>This notebook visualizes and measures the results of an A/B test.</p>
// //       <ul className="">
// //         <li>
// //           Measure weekly conversions from visiting the landing pageto signing up.
// //         </li>
// //         <li>
// //           Measure weekly retention of users who signed up.
// //         </li>
// //       </ul>
// //       </div>
// //     </div>
// //   ) ;
// // }
// "use client"
// import { useState } from "react";

// export default function Home() {
//   const [isOutputVisible, setOutputVisible] = useState(false);
//   const [sqlCode, setSqlCode] = useState(`select
//     visits.user_id,
//     visits.visited_at,
//     users.signed_up_at,
//     users_ab.variant
//   from
//     visits
//   left join users on visits.user_id = users.user_id
//   inner join users_ab on visits.user_id = users_ab.user_id;`);
//   const [convCode, setConvCode] = useState(`visits['registered'] = visits.signed_up_at.notna()
// visits = visits.sort_values('visited_at').drop_duplicates('user_id', keep='first').copy()
// conversion = visits.copy()
// conversion['week'] = conversion.visited_at.dt.tz_localize(None).dt.to_period('W').dt.to_timestamp()
// conversion = conversion.groupby(['variant', 'week']).registered.value_counts(normalize=True, dropna=False)`);
  
//   const handleConvCodeChange = (e) => {
//     setConvCode(e.target.value);
// }
//   const handleSqlChange = (e) => {
//     setSqlCode(e.target.value);
//   };

//   return (
//     <div className="p-4">
//       {/* Title */}
//       <h1 className="text-5xl font-bold">A/B Testing</h1>

//       {/* Description */}
//       <div className="px-4 mt-4">
//         <p>This notebook visualizes and measures the results of an A/B test.</p>
//         <ul className="mt-2 list-disc pl-6">
//           <li>Measure weekly conversions from visiting the landing page to signing up.</li>
//           <li>Measure weekly retention of users who signed up.</li>
//         </ul>
//       </div>

//       {/* SQL Section */}
//       <div className="mt-6">
//         <div className="flex justify-between items-center">
//           <p className="text-xl font-semibold">[Demo] Postgres</p>
//           <button
//             onClick={() => setOutputVisible(!isOutputVisible)}
//             className="text-blue-500 hover:text-blue-700"
//           >
//             {isOutputVisible ? "Hide output" : "Show output"}
//           </button>
//         </div>
//         <div className="mt-2">
//           <p className="font-medium text-gray-500">Variable: visits</p>
//         </div>

//         {/* SQL Code Block */}
//         <textarea
//           value={sqlCode}
//           onChange={handleSqlChange}
//           rows={10}
//           className="bg-gray-800 text-white p-4 mt-2 w-full rounded-lg"
//           defaultValue={""}
//         >
//           <code>
//             {}
//           </code>
//         </textarea>

//         {/* Output Section */}
//         {isOutputVisible && (
//           <div className="bg-gray-100 p-4 mt-4 rounded-lg">
//             <p className="font-medium">This output has been hidden. Show it.</p>
//           </div>
//         )}
//       </div>

//       {/* Conversion Rate Section */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold">Conversion Rate</h3>
//         <p className="mt-2">
//           We need to check whether one variant resulted in a higher conversion rate than another. Let's start with a time series.
//         </p>
//         <textarea
//           value={convCode}
//           onChange={handleConvCodeChange}
//           rows={10}
//           className="bg-gray-800 text-white p-4 mt-2 w-full rounded-lg"
//           defaultValue={""}
//         >
//           <code>
//             {}
//           </code>
//         </textarea>
//       </div>
//     </div>
//   );
// }


"use client"
import { useState } from "react";

export default function Home() {
  const [isOutputVisible, setOutputVisible] = useState(false);
  const [sqlCode, setSqlCode] = useState(`select
    visits.user_id,
    visits.visited_at,
    users.signed_up_at,
    users_ab.variant
  from
    visits
  left join users on visits.user_id = users.user_id
  inner join users_ab on visits.user_id = users_ab.user_id;`);

  const [convCode, setConvCode] = useState(`visits['registered'] = visits.signed_up_at.notna()
visits = visits.sort_values('visited_at').drop_duplicates('user_id', keep='first').copy()
conversion = visits.copy()
conversion['week'] = conversion.visited_at.dt.tz_localize(None).dt.to_period('W').dt.to_timestamp()
conversion = conversion.groupby(['variant', 'week']).registered.value_counts(normalize=True, dropna=False)`);

  const handleConvCodeChange = (e) => {
    setConvCode(e.target.value);
  };

  const handleSqlChange = (e) => {
    setSqlCode(e.target.value);
  };

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="text-5xl font-bold">A/B Testing</h1>

      {/* Description */}
      <div className="px-4 mt-4">
        <p>This notebook visualizes and measures the results of an A/B test.</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Measure weekly conversions from visiting the landing page to signing up.</li>
          <li>Measure weekly retention of users who signed up.</li>
        </ul>
      </div>

      {/* SQL Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">[Demo] Postgres</p>
          <button
            onClick={() => setOutputVisible(!isOutputVisible)}
            className="text-blue-500 hover:text-blue-700"
          >
            {isOutputVisible ? "Hide output" : "Show output"}
          </button>
        </div>
        <div className="mt-2">
          <p className="font-medium text-gray-500">Variable: visits</p>
        </div>

        {/* SQL Code Block */}
        <textarea
          value={sqlCode}
          onChange={handleSqlChange}
          rows={10}
          className="bg-gray-800 text-white p-4 mt-2 w-full rounded-lg"
        />

        {/* Output Section */}
        {isOutputVisible && (
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
            <p className="font-medium">This output has been hidden. Show it.</p>
          </div>
        )}
      </div>

      {/* Conversion Rate Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Conversion Rate</h3>
        <p className="mt-2">
          We need to check whether one variant resulted in a higher conversion rate than another. Let's start with a time series.
        </p>
        <textarea
          value={convCode}
          onChange={handleConvCodeChange}
          rows={10}
          className="bg-gray-800 text-white p-4 mt-2 w-full rounded-lg"
        />
      </div>
    </div>
  );
}
