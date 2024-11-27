function viewExams() {
    alert("سيتم نقلك إلى صفحة الامتحانات قريبًا!");
}
function uploadExam(subject) {
    // عرض نافذة رفع الملفات
    const modal = document.getElementById("uploadModal");
    const modalTitle = document.getElementById("modalTitle");
    modalTitle.textContent = `رفع اختبار مادة ${subject}`;
    modal.style.display = "flex";

    // ضبط حدث إرسال النموذج
    const uploadForm = document.getElementById("uploadForm");
    uploadForm.onsubmit = function (event) {
        event.preventDefault();
        const fileInput = document.getElementById("examFile");
        const file = fileInput.files[0];
        if (file) {
            alert(`تم رفع اختبار ${subject} بنجاح: ${file.name}`);
            fileInput.value = ""; // تفريغ الحقل بعد الرفع
            closeModal();
        } else {
            alert("يرجى اختيار ملف قبل الرفع.");
        }
    };
}

function viewExams(subject) {
    alert(`سيتم عرض اختبارات مادة ${subject} قريبًا.`);
}

function closeModal() {
    const modal = document.getElementById("uploadModal");
    modal.style.display = "none";
}