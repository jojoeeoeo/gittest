module.exports = {
    apps: [
      {
        name: "my-node-api", // ชื่อแอปพลิเคชัน
        script: "server.js", // ชื่อไฟล์เริ่มต้น
        instances: "1", // ใช้ CPU ทั้งหมด
        exec_mode: "cluster", // โหมด cluster
        watch: false, // ดูการเปลี่ยนแปลงไฟล์
        max_memory_restart: "300M",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  