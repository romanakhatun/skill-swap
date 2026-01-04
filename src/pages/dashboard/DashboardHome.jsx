import { useQuery } from "@tanstack/react-query";
import {
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import useAxios from "../../hooks/useAxios";

const DashboardHome = () => {
  const axiosInstance = useAxios();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosInstance.get("/admin-analytics");
      return res.data;
    },
  });

  const COLORS = ["#2d447a", "#1fe6d9", "#ffc300", "#e79c4e"];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate__animated animate__fadeIn">
      {/* --- Section 1: Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats shadow bg-base-100 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-primary">
              <HiOutlineBookOpen size={32} />
            </div>
            <div className="stat-title text-base-content/60">Total Courses</div>
            <div className="stat-value text-primary">
              {stats?.totalCourses || 0}
            </div>
            <div className="stat-desc text-success">↗︎ Total listed</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <HiOutlineUsers size={32} />
            </div>
            <div className="stat-title text-base-content/60">
              Total Students
            </div>
            <div className="stat-value text-secondary">
              {stats?.totalStudents || 0}
            </div>
            <div className="stat-desc text-base-content/50">
              Active Learners
            </div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-accent">
              <HiOutlineTrendingUp size={32} />
            </div>
            <div className="stat-title text-base-content/60">Global Rating</div>
            <div className="stat-value text-accent">4.8/5</div>
            <div className="stat-desc">Community Avg</div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Dynamic Bar Chart (Fixing Array Structure) --- */}
      <div className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-base-content">
          Courses by Category
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats?.categoryData || []}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#88888833"
              />
              <XAxis
                dataKey="_id"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "currentColor" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "currentColor" }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  backgroundColor: "var(--color-base-100)",
                  border: "1px solid var(--color-base-300)",
                  color: "var(--color-base-content)",
                }}
              />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {stats?.categoryData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- Section 3: Data Table --- */}
      <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-base-300 flex justify-between items-center">
          <h3 className="text-xl font-bold text-base-content">
            Recent Course Additions
          </h3>
          <button className="btn btn-sm btn-ghost">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>Course Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Static rows for UI, you can map real recent courses here if needed */}
              <tr>
                <td>React Mastery 2026</td>
                <td>
                  <span className="badge badge-primary badge-outline">
                    Coding
                  </span>
                </td>
                <td className="font-bold">$49.99</td>
                <td>
                  <span className="badge badge-success">Active</span>
                </td>
              </tr>
              <tr>
                <td>Modern Yoga Flow</td>
                <td>
                  <span className="badge badge-secondary badge-outline">
                    Wellness
                  </span>
                </td>
                <td className="font-bold">$29.99</td>
                <td>
                  <span className="badge badge-warning">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
