// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: "my-node-api", // ชื่อแอปพลิเคชัน
        script: "server.js", // ชื่อไฟล์เริ่มต้น
        instances: "max", // ใช้ CPU ทั้งหมด
        exec_mode: "cluster", // โหมด cluster
        watch: true, // ดูการเปลี่ยนแปลงไฟล์
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  