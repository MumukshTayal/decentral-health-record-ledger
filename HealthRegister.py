import smartpy as sp

class HealthRegister(sp.Contract):
    def __init__(self):
        # storage
        self.init(
            record = sp.map(l = {}, tkey = sp.TAddress, tvalue = sp.TList(t = sp.TRecord(date = sp.TString, 
            doctor = sp.TString,
            age = sp.TString, 
            height = sp.TString, 
            weight = sp.TString, 
            hospital = sp.TString, 
            prescription = sp.TString))),
        )
    
    # @sp.entry_point
    # def is_registered(self):


    @sp.entry_point
    def register(self):
        sp.if self.data.record.contains(sp.sender) == False:
            self.data.record[sp.sender] = sp.list([])
        # sp.else:
        #     return False

    @sp.entry_point
    def add_record(self, _date, _doctor,_age,_height,_weight,_hospital,_prescription):

        sp.set_type(_date, sp.TString)
        sp.set_type(_doctor, sp.TString)
        sp.set_type(_age, sp.TString)
        sp.set_type(_height, sp.TString)
        sp.set_type(_weight, sp.TString)
        sp.set_type(_hospital, sp.TString)
        sp.set_type(_prescription, sp.TString)

        self.data.record[sp.sender].push(sp.record(date = _date,
        doctor = _doctor,
        age = _age,
        height = _height,
        weight = _weight,
        hospital = _hospital,
        prescription = _prescription
        ))

        # sp.if self.data.record.contains(sp.sender):
        #     self.data.record[sp.sender].push(sp.record(date = _date, recd_txt = _record_text))
        # sp.else:
        #     self.data.record[sp.sender] = sp.list([])
        #     self.data.record[sp.sender].push(sp.record(date = _date, recd_txt = _record_text))

@sp.add_test(name="main")
def test():
    scenario = sp.test_scenario()

    # test accounts
    alice = sp.test_account("alice")
    chris = sp.test_account("chris")
    bob = sp.test_account("bob")

    healthregister = HealthRegister()
    scenario += healthregister

    # scenario += healthregister.register().run(sender = alice)
    scenario += healthregister.register().run(sender = chris)
    scenario += healthregister.register().run(sender = bob)

    scenario += healthregister.add_record(_date = '11th June 2022', 
    _doctor = 'Mr. Derek',
    _age = '18',
    _height = '2m',
    _weight = '50 kg',_hospital = 'KD',_prescription = 'rest').run(sender = chris)
    
    scenario += healthregister.add_record(_date = '11th June 2022', 
    _doctor = 'Mr. berek',
    _age = '181',
    _height = '21m',
    _weight = '510 kg',_hospital = 'KD',_prescription = 'rest').run(sender = bob)

    scenario += healthregister.add_record(_date = '11th June 2022', 
    _doctor = 'Mr. aerek',
    _age = '18',
    _height = '2m',
    _weight = '50 kg',_hospital = 'KD',_prescription = 'rest').run(sender = alice, valid = False)
    
    scenario += healthregister.add_record(_date = '11th June 2022', 
    _doctor = 'Mr. eerek',
    _age = '18',
    _height = '2m',
    _weight = '50 kg',_hospital = 'KD',_prescription = 'rest').run(sender = chris)
