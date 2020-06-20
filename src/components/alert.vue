<template>
  <div>
    <!-- alert -->
    <div class="layer_pop_wrap type_simple" id="alertLayerWrap" style="display:none;">
      <div class="pop_inner">
        <div class="pop_wrap">
          <div class="con_box">
            <p id="alertLayerMsg" class="word_break_all"></p>
          </div>
          <div class="btn_wrap no_pad">
            <button type="button" class="btn btn_black02 btn_bd_rdus_none" id="alertLayerBtnOk">확인
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- //alert -->

    <!-- confirm -->
    <div class="layer_pop_wrap type_simple" id="confirmLayerWrap" style="display:none;">
      <div class="pop_inner">
        <div class="pop_wrap">
          <div class="con_box">
            <p id="confirmLayerMsg" class="word_break_all"></p>
          </div>
          <div class="btn_wrap no_pad">
            <button type="button" class="btn btn_black02 btn_bd_rdus_none" id="confirmLayerBtnCncl">
              취소
            </button>
            <button type="button" class="btn btn_red02 btn_bd_rdus_none" id="confirmLayerBtnOk">확인
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- //confirm -->
  </div>
</template>
<script>
  export default {
    name: "alert",
    data() {
      return {}
    }
  }
</script>
<style src="../css/common.css"></style>
