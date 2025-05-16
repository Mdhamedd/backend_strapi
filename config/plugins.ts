module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},        // إعدادات إضافية للرفع لو حبيت تزود في المستقبل
          uploadStream: {},  // للرفع باستخدام الـ stream (مش مهم تعدله دلوقتي)
          delete: {},        // لو عايز تضبط إعدادات حذف الصور برضو في المستقبل
        },
      },
    },
  });
  