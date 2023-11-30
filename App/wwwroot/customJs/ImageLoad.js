$("#Imagebtn").click(function () {
    
    var imgModel = {};
    imgModel.PatientID = $("#InvestigationImages_PatientId").val();

    if ($("#viewbegMethod").val() == "save")
    {
        imgModel.PatientID = $("#viewbegPatientId").val();
        imgModel.Msg = "save";
    }
    if (imgModel.PatientID == "") {
        imgModel.PatientID = 0;
    }
    imgModel.Id = $("#InvestigationImages_Id").val();
    if (imgModel.Id == "") {
        imgModel.Id = 0;
    }
    imgModel.InvestigationID = $("#InvestigationImages_InvestigationID").val();
    if (imgModel.InvestigationID == "") {
        imgModel.InvestigationID = 0;
    }
   
    imgModel.BloodSugar_img = $("#InvestigationImagesModel_BloodSugar_img")[0].files[0];
    imgModel.TFT_img = $("#InvestigationImagesModel_TFT_img")[0].files[0];
    imgModel.USG_img = $("#InvestigationImagesModel_USG_img")[0].files[0];
    imgModel.SONOMMOGRAPHY_img = $("#InvestigationImagesModel_SONOMMOGRAPHY_img")[0].files[0];
    imgModel.CECT_img = $("#InvestigationImagesModel_CECT_img")[0].files[0];
    imgModel.MRI_img = $("#InvestigationImagesModel_MRI_img")[0].files[0];
    imgModel.FNAC_img = $("#InvestigationImagesModel_FNAC_img")[0].files[0];
    imgModel.TrucutBiopsy_img = $("#InvestigationImagesModel_TrucutBiopsy_img")[0].files[0];
    imgModel.ReceptorStatus_img = $("#InvestigationImagesModel_ReceptorStatus_img")[0].files[0];
    imgModel.MRCP_img = $("#InvestigationImagesModel_MRCP_img")[0].files[0];
    imgModel.ERCP_img = $("#InvestigationImagesModel_ERCP_img")[0].files[0];
    imgModel.EndoscopyUpperGI_img = $("#InvestigationImagesModel_EndoscopyUpperGI_img")[0].files[0];
    imgModel.EndoscopyLowerGI_img = $("#InvestigationImagesModel_EndoscopyLowerGI_img")[0].files[0];
    imgModel.PETCT_img = $("#InvestigationImagesModel_PETCT_img")[0].files[0];
    imgModel.TumorMarkers_img = $("#InvestigationImagesModel_TumorMarkers_img")[0].files[0];
   
    imgModel.IVP_img = $("#InvestigationImagesModel_IVP_img")[0].files[0];
    imgModel.MCU_img = $("#InvestigationImagesModel_MCU_img")[0].files[0];
    imgModel.RGU_img = $("#InvestigationImagesModel_RGU_img")[0].files[0];

    //imgModel.CBC_img = $("#InvestigationImagesModel_CBC_img")[0].files[0];
    //imgModel.RFT_img = $("#InvestigationImagesModel_RFT_img")[0].files[0];
    imgModel.BloodSugar_img = $("#InvestigationImagesModel_BloodSugar_img")[0].files[0];
    //imgModel.LFT_img = $("#InvestigationImagesModel_LFT_img")[0].files[0];
    imgModel.TFT_img = $("#InvestigationImagesModel_TFT_img")[0].files[0];
    //imgModel.PTDNR_img = $("#InvestigationImagesModel_PTDNR_img")[0].files[0];
    //imgModel.LipidProfile_img = $("#InvestigationImagesModel_LipidProfile_img")[0].files[0];
    //imgModel.UrineRM_img = $("#InvestigationImagesModel_UrineRM_img")[0].files[0];

    var formData = new FormData();

    formData.append("PatientID", imgModel.PatientID);
    formData.append("Id", imgModel.Id);
    formData.append("InvestigationID", imgModel.InvestigationID);
    formData.append("BloodSugar_img", imgModel.BloodSugar_img);
    formData.append("TFT_img", imgModel.TFT_img);
    formData.append("USG_img", imgModel.USG_img);
    formData.append("SONOMMOGRAPHY_img", imgModel.SONOMMOGRAPHY_img);
    formData.append("CECT_img", imgModel.CECT_img);
    formData.append("MRI_img", imgModel.MRI_img);
    formData.append("FNAC_img", imgModel.FNAC_img);
    formData.append("TrucutBiopsy_img", imgModel.TrucutBiopsy_img);
    formData.append("ReceptorStatus_img", imgModel.ReceptorStatus_img);
    formData.append("MRCP_img", imgModel.MRCP_img);
    formData.append("ERCP_img", imgModel.ERCP_img);
    formData.append("EndoscopyUpperGI_img", imgModel.EndoscopyUpperGI_img);
    formData.append("EndoscopyLowerGI_img", imgModel.EndoscopyLowerGI_img);
    formData.append("PETCT_img", imgModel.PETCT_img);
    formData.append("TumorMarkers_img", imgModel.TumorMarkers_img);
   
    formData.append("IVP_img", imgModel.IVP_img);
    formData.append("MCU_img", imgModel.MCU_img);
    formData.append("RGU_img", imgModel.RGU_img);
    formData.append("Msg", imgModel.Msg);

    formData.append("CBC_img", imgModel.CBC_img);
    formData.append("RFT_img", imgModel.RFT_img);
    formData.append("BloodSugar_img", imgModel.BloodSugar_img);
    formData.append("LFT_img", imgModel.LFT_img);
    formData.append("TFT_img", imgModel.TFT_img);
    formData.append("PTDNR_img", imgModel.PTDNR_img);
    formData.append("LipidProfile_img", imgModel.LipidProfile_img);
    formData.append("UrineRM_img", imgModel.UrineRM_img);

    $.ajax({
        url: '/Patient/AddPicture',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (msg) {

            $("#ImageSuccessMessage").text(msg).show();
            ///$("#Imagebtn").prop("disabled", true);
        },
        error: function (xhr, status, error) {
        
            console.log('Error uploading image.');
        }
    });

    $('#investigation input[type=text]').each(function () {
        $(this).val('');
    });
});



