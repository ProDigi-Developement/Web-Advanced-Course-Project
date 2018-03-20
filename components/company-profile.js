// company profile component
let ProfileComponent = Vue.component('lc-company-profile', {
    template: `
    <div>

    <form>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Company Name</label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="companyName" placeholder="Company Name">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Address</label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="Address" placeholder="XX Street XX City">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label> Email</label>
        </div>

        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="example@XXX.com">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label> Phone number</label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="phoneNumber" placeholder="###-###-####">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Contact person </label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="contactPerson" placeholder="The person to contact">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Description</label>
        </div>

        <div class="col-sm-10">
          <textarea class="form-control" id="description" placeholder="About this company" rows="3"></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-warning">SAVE</button>
  </form>
    </div>
  `,
    data: function() {
        return {};
    },
    methods: {

    },
});